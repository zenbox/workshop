import {
    createHash,
    randomBytes,
    scrypt as callbackScrypt,
    timingSafeEqual,
} from "node:crypto";
import { promisify } from "node:util";
import db from "./db.js";

const scrypt = promisify(callbackScrypt);
export const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000;

async function hashPassword(password, salt = randomBytes(16).toString("hex")) {
    const key = await scrypt(password, salt, 64);
    return `scrypt$${salt}$${key.toString("hex")}`;
}

async function passwordMatches(password, storedHash) {
    const [algorithm, salt, storedKey] = storedHash.split("$");
    if (algorithm !== "scrypt" || !salt || !storedKey) return false;
    const candidate = await scrypt(password, salt, 64);
    const expected = Buffer.from(storedKey, "hex");
    return (
        candidate.length === expected.length &&
        timingSafeEqual(candidate, expected)
    );
}

class AuthModel {
    // Lernkontext 3.1: Das Passwort verlässt das Model ausschließlich als gesalzener Hash.
    async createUser(email, password) {
        const passwordHash = await hashPassword(password);
        const [id] = await db("users").insert({
            email,
            password_hash: passwordHash,
            created_at: Date.now(),
        });
        return { id, email };
    }

    findUserByEmail(email) {
        return db("users")
            .select("id", "email", "password_hash")
            .where({ email })
            .first();
    }

    async verifyPassword(password, passwordHash) {
        return passwordMatches(password, passwordHash);
    }

    async createSession(userId) {
        const sessionId = randomBytes(32).toString("base64url");
        const csrfToken = randomBytes(32).toString("hex");
        const sessionHash = createHash("sha256")
            .update(sessionId)
            .digest("hex");
        await db("sessions").insert({
            session_hash: sessionHash,
            user_id: userId,
            csrf_token: csrfToken,
            expires_at: Date.now() + SESSION_DURATION_MS,
        });
        return { sessionId, csrfToken };
    }

    async findSession(sessionId) {
        if (!sessionId) return null;
        const sessionHash = createHash("sha256")
            .update(sessionId)
            .digest("hex");
        const record = await db("sessions")
            .join("users", "sessions.user_id", "users.id")
            .select(
                "sessions.session_hash",
                "sessions.csrf_token",
                "sessions.expires_at",
                "users.id",
                "users.email"
            )
            .where({ "sessions.session_hash": sessionHash })
            .first();

        if (!record) return null;
        if (record.expires_at <= Date.now()) {
            await db("sessions").where({ session_hash: sessionHash }).del();
            return null;
        }

        return {
            id: record.id,
            email: record.email,
            csrfToken: record.csrf_token,
            sessionId,
        };
    }

    async destroySession(sessionId) {
        if (!sessionId) return;
        const sessionHash = createHash("sha256")
            .update(sessionId)
            .digest("hex");
        await db("sessions").where({ session_hash: sessionHash }).del();
    }

    removeExpiredSessions() {
        return db("sessions").where("expires_at", "<=", Date.now()).del();
    }
}

export default new AuthModel();
