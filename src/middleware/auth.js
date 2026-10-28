import { timingSafeEqual } from "node:crypto";

export function validateLogin(req, res, next) {
    const { email, password } = req.body ?? {};
    if (
        typeof email !== "string" ||
        typeof password !== "string" ||
        !email.trim() ||
        email.trim().length > 254 ||
        !password ||
        password.length > 200
    ) {
        return res
            .status(422)
            .json({
                error: "E-Mail und Passwort sind erforderlich (max. 254/200 Zeichen).",
            });
    }
    req.body = { email: email.trim().toLowerCase(), password };
    next();
}

export function requireAuth(req, res, next) {
    if (!Number.isSafeInteger(req.session?.userId) || req.session.userId <= 0) {
        return res.status(401).json({ error: "Bitte anmelden." });
    }
    res.set("Cache-Control", "no-store");
    next();
}

export function requireCsrf(req, res, next) {
    if (["GET", "HEAD", "OPTIONS"].includes(req.method)) return next();
    const supplied = req.get("X-CSRF-Token");
    const expected = req.session?.csrfToken;
    if (
        typeof supplied !== "string" ||
        typeof expected !== "string" ||
        !/^[a-f0-9]{64}$/.test(supplied) ||
        !/^[a-f0-9]{64}$/.test(expected) ||
        !timingSafeEqual(Buffer.from(supplied), Buffer.from(expected))
    ) {
        return res.status(403).json({ error: "Ungueltiger CSRF-Token." });
    }
    next();
}

export function createOriginCheck(origin) {
    return (req, res, next) => {
        if (["GET", "HEAD", "OPTIONS"].includes(req.method)) return next();
        const supplied = req.get("Origin");
        if (
            (supplied && supplied !== origin) ||
            req.get("Sec-Fetch-Site") === "cross-site"
        ) {
            return res.status(403).json({ error: "Origin nicht erlaubt." });
        }
        if (req.method !== "DELETE" && !req.is("application/json")) {
            return res
                .status(415)
                .json({ error: "Content-Type application/json erforderlich." });
        }
        next();
    };
}
