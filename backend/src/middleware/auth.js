// Lernkontext 3.3: Mutationen verlangen Session und CSRF-Token.
export function requireAuth(request, response, next) {
    if (!request.auth) {
        return response.status(401).json({ error: "Anmeldung erforderlich" });
    }
    next();
}

export function requireCsrf(request, response, next) {
    const supplied = request.get("x-csrf-token");
    if (
        !request.auth ||
        typeof supplied !== "string" ||
        supplied !== request.auth.csrfToken
    ) {
        return response
            .status(403)
            .json({ error: "CSRF-Prüfung fehlgeschlagen" });
    }
    next();
}
