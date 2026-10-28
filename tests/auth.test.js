import assert from "node:assert/strict";
import { mkdtemp, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import http from "node:http";
import { randomBytes } from "node:crypto";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { Database, seedDemoUsers } from "../src/db/index.js";
import {
    hashPassword,
    verifyPassword,
} from "../src/services/passwordService.js";
import { createApp } from "../src/server.js";
import { SheepModel } from "../src/models/sheep-model.js";
import { UserModel } from "../src/models/user-model.js";
import { SqliteSessionStore } from "../src/db/sqliteSessionStore.js";
import { createSessionMiddleware } from "../src/middleware/session.js";
import { startServer } from "../src/server.js";
import { io as connectSocket } from "socket.io-client";

const credentials = {
    DEMO_USER_EMAIL: " Demo@example.test ",
    DEMO_USER_PASSWORD: "test-password-one",
    DEMO_SECOND_USER_EMAIL: "jonas@example.test",
    DEMO_SECOND_USER_PASSWORD: "test-password-two",
};

test("Passwort-Hashes sind gesalzen und pruefbar", async () => {
    const hash = await hashPassword(" test password ");
    assert.notEqual(hash, await hashPassword(" test password "));
    assert.equal(await verifyPassword(" test password ", hash), true);
    assert.equal(await verifyPassword("test password", hash), false);
    assert.equal(await verifyPassword("anything", "broken"), false);
});

test("Migration und Demo-Seeding erhalten Daten und sind wiederholbar", async (context) => {
    const directory = await mkdtemp(path.join(os.tmpdir(), "herd-auth-"));
    const filename = path.join(directory, "test.sqlite");
    let database;
    context.after(async () => {
        await database?.close();
        await rm(directory, { recursive: true, force: true });
    });
    const legacy = await open({ filename, driver: sqlite3.Database });
    await legacy.exec(`CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL,
        created_at TEXT NOT NULL DEFAULT (datetime('now'))
    ); INSERT INTO users (id, name) VALUES (1, 'Demo'), (2, 'Jonas');`);
    await legacy.close();
    database = await Database.open(filename);
    const before = await database.db.all("SELECT * FROM sheep ORDER BY id");
    await seedDemoUsers(database.db, credentials);
    const users = await database.db.all("SELECT * FROM users ORDER BY id");
    assert.equal(users[0].email, "demo@example.test");
    assert.equal(users[0].name, "Demo");
    assert.equal(
        await verifyPassword(
            credentials.DEMO_USER_PASSWORD,
            users[0].password_hash
        ),
        true
    );
    await database.close();
    database = await Database.open(filename);
    await seedDemoUsers(database.db, credentials);
    assert.deepEqual(
        await database.db.all("SELECT * FROM users ORDER BY id"),
        users
    );
    assert.deepEqual(
        await database.db.all("SELECT * FROM sheep ORDER BY id"),
        before
    );
    await assert.rejects(
        seedDemoUsers(database.db, {
            ...credentials,
            DEMO_USER_PASSWORD: "changed-password",
        }),
        /nicht ueberschrieben/
    );
    await assert.rejects(
        database.db.run(
            "UPDATE users SET email = ? WHERE id = 2",
            "DEMO@example.test"
        ),
        /UNIQUE/
    );
});

test("Migration normalisiert wie der Login und rollt E-Mail-Konflikte zurueck", async (context) => {
    const directory = await mkdtemp(path.join(os.tmpdir(), "herd-migration-"));
    const filename = path.join(directory, "test.sqlite");
    let database;
    context.after(async () => {
        await database?.close();
        await rm(directory, { recursive: true, force: true });
    });
    const legacy = await open({ filename, driver: sqlite3.Database });
    await legacy.exec(`CREATE TABLE users (
        id INTEGER PRIMARY KEY, name TEXT NOT NULL, email TEXT,
        created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`);
    const original = " D\u00c4MO@EXAMPLE.TEST ";
    const normalized = original.trim().toLowerCase();
    await legacy.run(
        "INSERT INTO users (id, name, email) VALUES (1, 'Demo', ?), (2, 'Jonas', ?)",
        original,
        normalized
    );
    await legacy.close();
    await assert.rejects(Database.open(filename), /E-Mail-Konflikt/);
    const unchanged = await open({ filename, driver: sqlite3.Database });
    assert.equal(
        (await unchanged.get("SELECT email FROM users WHERE id = 1")).email,
        original
    );
    assert.equal(
        (await unchanged.all("PRAGMA table_info(users)")).some(
            (column) => column.name === "password_hash"
        ),
        false
    );
    await unchanged.run(
        "UPDATE users SET email = ? WHERE id = 2",
        "jonas@example.test"
    );
    await unchanged.close();
    database = await Database.open(filename);
    assert.equal(
        (await database.db.get("SELECT email FROM users WHERE id = 1")).email,
        normalized
    );
});

async function fixture(context, { storeFailure, userFailure } = {}) {
    const directory = await mkdtemp(path.join(os.tmpdir(), "herd-http-"));
    const database = await Database.open(path.join(directory, "test.sqlite"));
    await seedDemoUsers(database.db, credentials);
    const sessionStore = new SqliteSessionStore(database.db);
    const userModel = new UserModel(database);
    if (userFailure)
        userModel.findByEmail = async () => {
            throw new Error("private-db-detail");
        };
    if (storeFailure)
        sessionStore.set = (sid, data, callback) =>
            callback(new Error("private-store-detail"));
    const sessionMiddleware = createSessionMiddleware({
        store: sessionStore,
        secret: randomBytes(32).toString("hex"),
    });
    const server = http.createServer(
        createApp({
            sheepModel: new SheepModel(database),
            userModel,
            sessionStore,
            sessionMiddleware,
        })
    );
    await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
    context.after(async () => {
        await new Promise((resolve) => server.close(resolve));
        await database.close();
        await rm(directory, { recursive: true, force: true });
    });
    const base = `http://127.0.0.1:${server.address().port}`;
    const request = (
        url,
        { method = "GET", body, cookie, token, headers = {} } = {}
    ) =>
        fetch(base + url, {
            method,
            headers: {
                ...(body === undefined
                    ? {}
                    : { "Content-Type": "application/json" }),
                ...(cookie ? { Cookie: cookie } : {}),
                ...(token ? { "X-CSRF-Token": token } : {}),
                ...headers,
            },
            body: body === undefined ? undefined : JSON.stringify(body),
        });
    const login = async (second = false, cookie) => {
        const response = await request("/auth/login", {
            method: "POST",
            cookie,
            body: {
                email: second
                    ? credentials.DEMO_SECOND_USER_EMAIL
                    : credentials.DEMO_USER_EMAIL,
                password: second
                    ? credentials.DEMO_SECOND_USER_PASSWORD
                    : credentials.DEMO_USER_PASSWORD,
            },
        });
        assert.equal(response.status, 200);
        const result = await response.json();
        assert.equal(result.data.password_hash, undefined);
        return {
            cookie: response.headers.get("set-cookie").split(";")[0],
            token: result.data.csrfToken,
        };
    };
    return { database, request, login, base };
}

test("Login validiert Felder, Parserfehler und Origin ohne Konten zu verraten", async (context) => {
    const { request } = await fixture(context);
    for (const [method, url] of [
        ["GET", "/herd"],
        ["GET", "/herd/1"],
        ["POST", "/herd"],
        ["PUT", "/herd/1"],
        ["DELETE", "/herd/1"],
        ["GET", "/auth/me"],
    ]) {
        assert.equal((await request(url, { method })).status, 401);
    }
    for (const body of [
        {},
        { email: " ", password: "x" },
        { email: 3, password: "x" },
        { email: "x", password: "x".repeat(201) },
        { email: "x".repeat(255), password: "x" },
    ]) {
        assert.equal(
            (await request("/auth/login", { method: "POST", body })).status,
            422
        );
    }
    const failed = [];
    for (const email of ["unknown@example.test", "demo@example.test"]) {
        const response = await request("/auth/login", {
            method: "POST",
            body: { email, password: "wrong" },
        });
        assert.equal(response.status, 401);
        failed.push(await response.json());
    }
    assert.deepEqual(failed[0], failed[1]);
    assert.equal(
        (
            await request("/auth/login", {
                method: "POST",
                body: { extra: "x".repeat(17000) },
            })
        ).status,
        413
    );
    assert.equal(
        (
            await request("/auth/login", {
                method: "POST",
                body: {},
                headers: { Origin: "https://evil.test" },
            })
        ).status,
        403
    );
    assert.equal(
        (await request("/auth/login", { method: "POST" })).status,
        415
    );
    const { base } = await fixture(context);
    assert.equal(
        (
            await fetch(base + "/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: "{broken",
            })
        ).status,
        400
    );
});

test("Login erneuert die Session und speichert sie vor dem Folgezugriff", async (context) => {
    const { request } = await fixture(context);
    const anonymous = await request("/demo/zaehler");
    const previousCookie = anonymous.headers.get("set-cookie").split(";")[0];
    const response = await request("/auth/login", {
        method: "POST",
        cookie: previousCookie,
        body: {
            email: credentials.DEMO_USER_EMAIL,
            password: credentials.DEMO_USER_PASSWORD,
        },
    });
    assert.equal(response.status, 200);
    assert.equal(response.headers.get("cache-control"), "no-store");
    const setCookie = response.headers.get("set-cookie");
    assert.match(setCookie, /HttpOnly/);
    assert.match(setCookie, /SameSite=Lax/);
    const cookie = setCookie.split(";")[0];
    assert.notEqual(cookie, previousCookie);
    assert.equal(
        (await request("/herd", { cookie: previousCookie })).status,
        401
    );
    assert.equal((await request("/herd", { cookie })).status, 200);
    const me = await request("/auth/me", { cookie });
    const data = (await me.json()).data;
    assert.equal(data.id, 1);
    assert.match(data.csrfToken, /^[a-f0-9]{64}$/);
    assert.equal(data.password_hash, undefined);
});

test("Globale Herde bleibt sichtbar; nur der Besitzer darf schreiben", async (context) => {
    const { request, login, database } = await fixture(context);
    const first = await login();
    const second = await login(true);
    const value = {
        name: "Globales Testschaf",
        breed: "Merino",
        age: 2,
        gender: "female",
    };
    const created = await request("/herd?user=1", {
        ...second,
        method: "POST",
        body: { ...value, userId: 1, user_id: 1 },
        headers: { "X-User-Id": "1" },
    });
    assert.equal(created.status, 201);
    const sheep = (await created.json()).data;
    assert.equal(sheep.userId, 2);
    assert.equal((await request(`/herd/${sheep.id}`, first)).status, 200);
    for (const identity of [first, second]) {
        const response = await request("/herd?user=999", {
            ...identity,
            headers: { "X-User-Id": "999" },
        });
        assert.equal(response.status, 200);
        assert.match(await response.text(), /Globales Testschaf/);
    }
    for (const method of ["PUT", "DELETE"]) {
        assert.equal(
            (
                await request(`/herd/${sheep.id}?user=2`, {
                    ...first,
                    method,
                    body: method === "PUT" ? value : undefined,
                    headers: { "X-User-Id": "2" },
                })
            ).status,
            404
        );
    }
    assert.equal(
        (
            await request(`/herd/${sheep.id}`, {
                ...second,
                method: "PUT",
                body: { ...value, age: 3 },
            })
        ).status,
        200
    );
    assert.equal(
        (await database.db.get("SELECT age FROM sheep WHERE id = ?", sheep.id))
            .age,
        3
    );
    assert.equal(
        (await request(`/herd/${sheep.id}`, { ...second, method: "DELETE" }))
            .status,
        204
    );
});

test("CSRF schuetzt Mutationen und Logout widerruft die Session", async (context) => {
    const { request, login, database } = await fixture(context);
    const identity = await login();
    const before = await database.db.get("SELECT COUNT(*) AS count FROM sheep");
    for (const token of [undefined, "wrong", "f".repeat(64)]) {
        assert.equal(
            (
                await request("/herd", {
                    cookie: identity.cookie,
                    token,
                    method: "POST",
                    body: {},
                })
            ).status,
            403
        );
    }
    assert.deepEqual(
        await database.db.get("SELECT COUNT(*) AS count FROM sheep"),
        before
    );
    assert.equal(
        (
            await request("/auth/logout", {
                cookie: identity.cookie,
                method: "POST",
                body: {},
            })
        ).status,
        403
    );
    const me = (await (await request("/auth/me", identity)).json()).data;
    assert.equal(me.csrfToken, identity.token);
    const logout = await request("/auth/logout", {
        ...identity,
        method: "POST",
        body: {},
    });
    assert.equal(logout.status, 204);
    assert.match(logout.headers.get("set-cookie"), /herd.sid=;/);
    assert.equal((await request("/herd", identity)).status, 401);
});

test("DB- und Store-Fehler bestaetigen keinen Login und verraten keine Details", async (context) => {
    for (const failure of [{ storeFailure: true }, { userFailure: true }]) {
        const { request, database } = await fixture(context, failure);
        const response = await request("/auth/login", {
            method: "POST",
            body: {
                email: credentials.DEMO_USER_EMAIL,
                password: credentials.DEMO_USER_PASSWORD,
            },
        });
        assert.equal(response.status, 500);
        assert.deepEqual(await response.json(), { error: "Interner Fehler" });
        assert.equal(
            (await database.db.get("SELECT COUNT(*) AS count FROM sessions"))
                .count,
            0
        );
    }
});

function socketEvent(socket, event) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            socket.off(event, listener);
            reject(new Error(`Socket-Event fehlt: ${event}`));
        }, 4000);
        const listener = (...args) => {
            clearTimeout(timer);
            resolve(args);
        };
        socket.once(event, listener);
    });
}

async function socketFixture(context) {
    const directory = await mkdtemp(path.join(os.tmpdir(), "herd-socket-"));
    const running = await startServer({
        host: "127.0.0.1",
        port: 0,
        dbFile: path.join(directory, "test.sqlite"),
        sessionSecret: randomBytes(32).toString("hex"),
        origin: "http://localhost:3000",
        demoUsers: credentials,
    });
    const clients = [];
    context.after(async () => {
        clients.forEach((client) => client.disconnect());
        await new Promise((resolve) => running.io.close(resolve));
        await running.database.close();
        await rm(directory, { recursive: true, force: true });
    });
    const base = `http://127.0.0.1:${running.server.address().port}`;
    const login = async (second = false, previousCookie) => {
        const response = await fetch(base + "/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...(previousCookie ? { Cookie: previousCookie } : {}),
            },
            body: JSON.stringify({
                email: second
                    ? credentials.DEMO_SECOND_USER_EMAIL
                    : credentials.DEMO_USER_EMAIL,
                password: second
                    ? credentials.DEMO_SECOND_USER_PASSWORD
                    : credentials.DEMO_USER_PASSWORD,
            }),
        });
        assert.equal(response.status, 200);
        return {
            cookie: response.headers.get("set-cookie").split(";")[0],
            token: (await response.json()).data.csrfToken,
        };
    };
    const socket = (
        identity,
        { origin = "http://localhost:3000", transport = "websocket" } = {}
    ) => {
        const client = connectSocket(base, {
            transports: [transport],
            autoConnect: false,
            reconnection: false,
            forceNew: true,
            auth: { userId: 999 },
            extraHeaders: {
                Origin: origin,
                ...(identity ? { Cookie: identity.cookie } : {}),
            },
        });
        clients.push(client);
        return client;
    };
    return { ...running, base, login, socket };
}

test("Socket.IO lehnt anonyme und fremde Origins ab (WebSocket und Polling)", async (context) => {
    const { socket, login } = await socketFixture(context);
    const identity = await login();
    for (const transport of ["websocket", "polling"]) {
        for (const [credentials, options] of [
            [undefined, { transport }],
            [identity, { transport, origin: "https://evil.test" }],
        ]) {
            const client = socket(credentials, options);
            const error = socketEvent(client, "connect_error");
            client.connect();
            await error;
            assert.equal(client.connected, false);
            client.disconnect();
        }
    }
});

test("Globale Socket-Ereignisse nutzen die Session-Identitaet; Logout trennt sofort", async (context) => {
    const { socket, login, base } = await socketFixture(context);
    const firstIdentity = await login();
    const secondIdentity = await login(true);
    const first = socket(firstIdentity);
    const second = socket(secondIdentity, { transport: "polling" });
    for (const client of [first, second]) {
        const connected = socketEvent(client, "connect");
        client.connect();
        await connected;
    }
    const received = socketEvent(second, "chat:message");
    first.emit("chat:send", "Globale Nachricht");
    const [message] = await received;
    assert.equal(message.userId, 1);
    assert.equal(message.userName, "Demo");
    assert.equal(message.text, "Globale Nachricht");
    const activity = socketEvent(second, "activity:message");
    const created = await fetch(base + "/herd", {
        method: "POST",
        headers: {
            "Cookie": firstIdentity.cookie,
            "Content-Type": "application/json",
            "X-CSRF-Token": firstIdentity.token,
        },
        body: JSON.stringify({
            name: "Live-Schaf",
            breed: "Merino",
            age: 2,
            gender: "female",
        }),
    });
    assert.equal(created.status, 201);
    const [event] = await activity;
    assert.equal(event.type, "sheep");
    assert.equal(event.sheep.name, "Live-Schaf");
    assert.equal(event.userId, 1);
    const disconnected = socketEvent(first, "disconnect");
    assert.equal(
        (
            await fetch(base + "/auth/logout", {
                method: "POST",
                headers: {
                    "Cookie": firstIdentity.cookie,
                    "Content-Type": "application/json",
                    "X-CSRF-Token": firstIdentity.token,
                },
                body: "{}",
            })
        ).status,
        204
    );
    await disconnected;
    assert.equal(first.connected, false);
    assert.equal(second.connected, true);
    const forbidden = socket(firstIdentity);
    const denied = socketEvent(forbidden, "connect_error");
    forbidden.connect();
    await denied;
});

test("Erneuter Login und Ablauf entziehen offenen Sockets den Zugriff", async (context) => {
    const { socket, login, database } = await socketFixture(context);
    const identity = await login();
    const client = socket(identity);
    const connected = socketEvent(client, "connect");
    client.connect();
    await connected;
    const disconnected = socketEvent(client, "disconnect");
    const renewed = await login(false, identity.cookie);
    await disconnected;
    assert.notEqual(renewed.cookie, identity.cookie);
    const row = await database.db.get("SELECT sid, data FROM sessions");
    const session = JSON.parse(row.data);
    const expiresAt = Date.now() + 250;
    session.cookie.expires = new Date(expiresAt).toISOString();
    await database.db.run(
        "UPDATE sessions SET data = ?, expires_at = ? WHERE sid = ?",
        JSON.stringify(session),
        expiresAt,
        row.sid
    );
    const expiring = socket(renewed);
    const open = socketEvent(expiring, "connect");
    const expired = socketEvent(expiring, "disconnect");
    expiring.connect();
    await open;
    await expired;
    assert.equal(expiring.connected, false);
});
