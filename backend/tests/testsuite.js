import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { createServer as createNetServer } from "node:net";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { after, before, test } from "node:test";
import { io as createSocketClient } from "socket.io-client";

let directory;
let databaseFile;
let port;
let serverProcess;
let baseUrl;

async function availablePort() {
    const probe = createNetServer();
    await new Promise((resolve, reject) => {
        probe.once("error", reject);
        probe.listen(0, "127.0.0.1", resolve);
    });
    const { port: available } = probe.address();
    await new Promise((resolve, reject) =>
        probe.close((error) => (error ? reject(error) : resolve()))
    );
    return available;
}

async function startServer() {
    serverProcess = spawn(process.execPath, ["src/app.js"], {
        cwd: new URL("..", import.meta.url),
        env: {
            ...process.env,
            DATABASE_FILE: databaseFile,
            HOST: "127.0.0.1",
            PORT: String(port),
            NODE_ENV: "test",
        },
        stdio: ["ignore", "pipe", "pipe"],
    });

    let output = "";
    await new Promise((resolve, reject) => {
        const timeout = setTimeout(
            () => reject(new Error(`Serverstart dauerte zu lange: ${output}`)),
            10000
        );
        serverProcess.stdout.on("data", (chunk) => {
            output += chunk.toString();
            if (output.includes(`http://127.0.0.1:${port}`)) {
                clearTimeout(timeout);
                resolve();
            }
        });
        serverProcess.stderr.on("data", (chunk) => {
            output += chunk.toString();
        });
        serverProcess.once("error", (error) => {
            clearTimeout(timeout);
            reject(error);
        });
        serverProcess.once("exit", (code) => {
            clearTimeout(timeout);
            reject(new Error(`Server beendet (${code}): ${output}`));
        });
    });
    baseUrl = `http://127.0.0.1:${port}`;
}

async function stopServer() {
    if (serverProcess?.exitCode !== null) return;
    const exited = once(serverProcess, "exit");
    serverProcess.kill("SIGTERM");
    await Promise.race([
        exited,
        new Promise((resolve) => setTimeout(resolve, 5000)),
    ]);
    if (serverProcess.exitCode === null) serverProcess.kill("SIGKILL");
    serverProcess = null;
}

async function request(
    client,
    path,
    { method = "GET", body, csrf = true } = {}
) {
    const headers = {};
    if (client?.cookie) headers.Cookie = client.cookie;
    if (body !== undefined) headers["Content-Type"] = "application/json";
    if (csrf && method !== "GET" && client?.csrfToken)
        headers["X-CSRF-Token"] = client.csrfToken;
    return fetch(`${baseUrl}${path}`, {
        method,
        headers,
        ...(body === undefined ? {} : { body: JSON.stringify(body) }),
    });
}

async function createAccount(email) {
    const response = await fetch(`${baseUrl}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email,
            password: "correct horse battery staple",
        }),
    });
    const data = await response.json();
    const cookie = response.headers.get("set-cookie")?.split(";", 1)[0];
    assert.ok(cookie, "Registrierung setzt ein Session-Cookie");
    return { cookie, csrfToken: data.csrfToken, user: data.user };
}

async function connectedSocket(cookie) {
    const socket = createSocketClient(baseUrl, {
        extraHeaders: { Cookie: cookie },
        transports: ["websocket"],
        reconnection: false,
    });
    try {
        await new Promise((resolve, reject) => {
            const timeout = setTimeout(
                () =>
                    reject(
                        new Error("Socket.IO-Verbindung lief in ein Timeout")
                    ),
                5000
            );
            socket.once("connect", () => {
                clearTimeout(timeout);
                resolve();
            });
            socket.once("connect_error", (error) => {
                clearTimeout(timeout);
                reject(error);
            });
        });
    } catch (error) {
        socket.disconnect();
        throw error;
    }
    return socket;
}

function nextSocketEvent(socket, eventName) {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(
            () => reject(new Error(`Socket-Event ${eventName} kam nicht an`)),
            3000
        );
        socket.once(eventName, (data) => {
            clearTimeout(timeout);
            resolve(data);
        });
    });
}

before(async () => {
    directory = await mkdtemp(join(tmpdir(), "weidebuch-api-test-"));
    databaseFile = join(directory, "test.sqlite");
    port = await availablePort();
    await startServer();
});

after(async () => {
    await stopServer();
    if (directory) await rm(directory, { recursive: true, force: true });
});

test("Weidebuch: HTTP, Anmeldung, CRUD, Rechte, Persistenz und Live-Updates", async () => {
    const page = await fetch(`${baseUrl}/`);
    assert.equal(page.status, 200);
    assert.match(await page.text(), /Weidebuch – Node\.js-Lernprojekt/);
    assert.equal((await fetch(`${baseUrl}/assets/css/styles.css`)).status, 200);
    assert.equal(
        (await fetch(`${baseUrl}/socket.io/socket.io.js`)).status,
        200
    );
    assert.deepEqual(await (await fetch(`${baseUrl}/health`)).json(), {
        status: "ok",
    });

    assert.equal((await request(null, "/api/sheep")).status, 401);
    const accountA = await createAccount("mara@example.test");
    const cookieHeader = await fetch(`${baseUrl}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: "invalid",
            password: "correct horse battery staple",
        }),
    });
    assert.equal(cookieHeader.status, 400);

    const login = await fetch(`${baseUrl}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: "mara@example.test",
            password: "wrong password",
        }),
    });
    assert.equal(login.status, 401);
    const authenticated = await fetch(`${baseUrl}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: "mara@example.test",
            password: "correct horse battery staple",
        }),
    });
    assert.equal(authenticated.status, 200);
    const loginData = await authenticated.json();
    const loginCookie = authenticated.headers.get("set-cookie");
    assert.match(loginCookie, /HttpOnly/);
    assert.match(loginCookie, /SameSite=Lax/);
    accountA.cookie = loginCookie.split(";", 1)[0];
    accountA.csrfToken = loginData.csrfToken;

    const missingCsrf = await request(accountA, "/api/sheep", {
        method: "POST",
        csrf: false,
        body: {},
    });
    assert.equal(missingCsrf.status, 403);
    const invalidSheep = await request(accountA, "/api/sheep", {
        method: "POST",
        body: { name: "Test", breed: "Unknown", age: 2, sex: "Weiblich" },
    });
    assert.equal(invalidSheep.status, 400);

    const createdResponse = await request(accountA, "/api/sheep", {
        method: "POST",
        body: { name: "Lotti", breed: "Ouessant", age: 4, sex: "Weiblich" },
    });
    assert.equal(createdResponse.status, 201);
    const created = await createdResponse.json();
    assert.deepEqual(
        Object.keys(created).sort((left, right) => left.localeCompare(right)),
        ["age", "breed", "id", "name", "sex"]
    );
    assert.equal(
        (await request(accountA, `/api/sheep/${created.id}`)).status,
        200
    );
    assert.equal(
        (await (await request(accountA, "/api/sheep")).json()).length,
        1
    );

    const duplicateResponse = await request(
        accountA,
        `/api/sheep/${created.id}/duplicate`,
        { method: "POST" }
    );
    assert.equal(duplicateResponse.status, 201);
    const duplicate = await duplicateResponse.json();
    assert.equal(duplicate.name, "Lotti (Kopie)");

    const updatedResponse = await request(
        accountA,
        `/api/sheep/${created.id}`,
        {
            method: "PATCH",
            body: { name: "Lotti Zwei", age: 5 },
        }
    );
    assert.equal(updatedResponse.status, 200);
    assert.equal((await updatedResponse.json()).name, "Lotti Zwei");

    const accountB = await createAccount("jonas@example.test");
    assert.deepEqual(await (await request(accountB, "/api/sheep")).json(), []);
    assert.equal(
        (await request(accountB, `/api/sheep/${created.id}`)).status,
        404
    );
    assert.equal(
        (
            await request(accountB, `/api/sheep/${created.id}`, {
                method: "DELETE",
            })
        ).status,
        404
    );

    await assert.rejects(connectedSocket(""), /Anmeldung erforderlich/);
    const socketA = await connectedSocket(accountA.cookie);
    const socketB = await connectedSocket(accountB.cookie);
    let eventForB = false;
    socketB.on("sheep:created", () => {
        eventForB = true;
    });
    const liveUpdate = nextSocketEvent(socketA, "sheep:created");
    const liveCreate = await request(accountA, "/api/sheep", {
        method: "POST",
        body: { name: "Live-Lotti", breed: "Merino", age: 1, sex: "Weiblich" },
    });
    assert.equal(liveCreate.status, 201);
    assert.equal((await liveUpdate).name, "Live-Lotti");
    await new Promise((resolve) => setTimeout(resolve, 100));
    assert.equal(
        eventForB,
        false,
        "Live-Ereignisse verlassen den Nutzerraum nicht"
    );

    const logoutB = await request(accountB, "/api/auth/logout", {
        method: "POST",
    });
    assert.equal(logoutB.status, 204);
    assert.equal((await request(accountB, "/api/sheep")).status, 401);
    const reloginB = await fetch(`${baseUrl}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: "jonas@example.test",
            password: "correct horse battery staple",
        }),
    });
    assert.equal(reloginB.status, 200);
    const reloginData = await reloginB.json();
    accountB.cookie = reloginB.headers.get("set-cookie").split(";", 1)[0];
    accountB.csrfToken = reloginData.csrfToken;

    socketA.disconnect();
    socketB.disconnect();
    await stopServer();
    await startServer();
    const persisted = await request(accountA, "/api/sheep");
    assert.equal(persisted.status, 200);
    assert.equal((await persisted.json()).length, 3);

    assert.equal(
        (
            await request(accountA, `/api/sheep/${created.id}`, {
                method: "DELETE",
            })
        ).status,
        204
    );
    assert.equal(
        (await request(accountA, `/api/sheep/${created.id}`)).status,
        404
    );
    assert.equal(
        (await request(accountA, "/api/auth/logout", { method: "POST" }))
            .status,
        204
    );
    assert.equal((await request(accountA, "/api/sheep")).status, 401);
});
