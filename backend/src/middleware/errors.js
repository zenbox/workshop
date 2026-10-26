// Lernkontext 3.3: Unerwartete Fehler verlassen die API nicht als Stacktrace.
export function errorHandler(error, _request, response, _next) {
    console.error(error);
    const status = Number.isInteger(error.status) ? error.status : 500;
    const message = status >= 500 ? "Interner Serverfehler" : error.message;
    response.status(status).json({ error: message });
}
