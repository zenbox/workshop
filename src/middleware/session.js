import session from "express-session";

export function createSessionMiddleware({ store, secret }) {
    if (!secret) {
        throw new Error(
            "SESSION_SECRET fehlt. Der Server startet nicht ohne Geheimnis."
        );
    }

    return session({
        name: "herd.sid",
        secret,
        store,
        resave: false, // nur speichern, wenn sich etwas geändert hat
        saveUninitialized: false, // keine Session für Anonyme anlegen
        cookie: {
            httpOnly: true, // JavaScript im Browser kann das Cookie nicht lesen
            sameSite: "lax", // schützt vor CSRF-Angriffen
            secure: process.env.NODE_ENV === "production", // nur über HTTPS im Produktionsmodus
            maxAge: 8 * 60 * 60 * 1000, // 8 Stunden
        },
    });
}
