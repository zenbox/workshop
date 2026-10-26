import authModel from "../models/authModel.js";
import { clearSessionCookie, setSessionCookie } from "../middleware/session.js";

function badRequest(message) {
    const error = new Error(message);
    error.status = 400;
    return error;
}

function credentials(body) {
    const email =
        typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
    const password = typeof body?.password === "string" ? body.password : "";
    const addressParts = email.split("@");
    const domain = addressParts[1] ?? "";
    const hasWhitespace = [...email].some(
        (character) => character.trim().length === 0
    );
    const validEmail =
        addressParts.length === 2 &&
        addressParts[0].length > 0 &&
        !hasWhitespace &&
        domain.includes(".") &&
        !domain.startsWith(".") &&
        !domain.endsWith(".");
    if (!validEmail || email.length > 254) {
        throw badRequest("Bitte eine gültige E-Mail-Adresse eingeben");
    }
    if (password.length > 256) throw badRequest("Das Passwort ist zu lang");
    return { email, password };
}

async function startSession(request, response, user, status = 200) {
    if (request.auth) await authModel.destroySession(request.auth.sessionId);
    const session = await authModel.createSession(user.id);
    setSessionCookie(response, session.sessionId);
    response.status(status).json({ user, csrfToken: session.csrfToken });
}

// Lernkontext 3.1: Login und Registrierung erzeugen eine neue serverseitige Session.
export async function register(request, response) {
    const { email, password } = credentials(request.body);
    if (password.length < 12)
        throw badRequest("Das Passwort muss mindestens 12 Zeichen lang sein");

    try {
        const user = await authModel.createUser(email, password);
        await startSession(request, response, user, 201);
    } catch (error) {
        if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
            error.status = 409;
            error.message =
                "Für diese E-Mail-Adresse besteht bereits ein Konto";
        }
        throw error;
    }
}

export async function login(request, response) {
    const { email, password } = credentials(request.body);
    const user = await authModel.findUserByEmail(email);
    const valid =
        user &&
        password.length > 0 &&
        (await authModel.verifyPassword(password, user.password_hash));
    if (!valid) {
        const error = new Error(
            "E-Mail-Adresse oder Passwort ist nicht korrekt"
        );
        error.status = 401;
        throw error;
    }
    await startSession(request, response, { id: user.id, email: user.email });
}

export function currentUser(request, response) {
    response.json({
        user: { id: request.auth.id, email: request.auth.email },
        csrfToken: request.auth.csrfToken,
    });
}

export async function logout(request, response) {
    const sessionId = request.auth.sessionId;
    await authModel.destroySession(sessionId);
    const io = request.app.get("io");
    for (const socket of io?.sockets.sockets.values() ?? []) {
        if (socket.data.sessionId === sessionId) socket.disconnect(true);
    }
    clearSessionCookie(response);
    response.status(204).end();
}
