import authModel from "../models/authModel.js";

export const SESSION_COOKIE = "weidebuch.sid";

export function readSessionCookie(cookieHeader = "") {
    for (const part of cookieHeader.split(";")) {
        const [name, ...valueParts] = part.trim().split("=");
        if (name !== SESSION_COOKIE) continue;
        try {
            return decodeURIComponent(valueParts.join("="));
        } catch {
            return null;
        }
    }
    return null;
}

export function setSessionCookie(response, sessionId) {
    const options = [
        `${SESSION_COOKIE}=${encodeURIComponent(sessionId)}`,
        "Path=/",
        "HttpOnly",
        "SameSite=Lax",
        `Max-Age=${Math.floor(7 * 24 * 60 * 60)}`,
    ];
    if (process.env.NODE_ENV === "production") options.push("Secure");
    response.setHeader("Set-Cookie", options.join("; "));
}

export function clearSessionCookie(response) {
    const options = [
        `${SESSION_COOKIE}=`,
        "Path=/",
        "HttpOnly",
        "SameSite=Lax",
        "Max-Age=0",
    ];
    if (process.env.NODE_ENV === "production") options.push("Secure");
    response.setHeader("Set-Cookie", options.join("; "));
}

export async function loadSession(request, _response, next) {
    try {
        request.auth = await authModel.findSession(
            readSessionCookie(request.headers.cookie)
        );
        next();
    } catch (error) {
        next(error);
    }
}
