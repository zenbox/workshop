// ReST API

export default (request, response) => {
    // Request: GET, POST, PUT/PATCH, DELETE
    // Zugriff auf den "User-Agent"-Header, der Informationen über den Client-Browser enthält
    const userAgent = request.headers["user-agent"];
    console.log(`User-Agent: ${userAgent}`);

    // Zugriff auf den "Authorization"-Header, der oft für Authentifizierungszwecke verwendet wird
    const authorizationHeader = request.headers["authorization"];
    console.log(`Authorization Header: ${authorizationHeader}`);

    // Ein CORS Header, um den Zugriff auf die API von anderen Domains zu erlauben
    response.setHeader("Access-Control-Allow-Origin", "*");

    const httpMethod = request.method;

    switch (httpMethod) {
        case "GET":
            // Verarbeiten von GET-Requests
            break;
        case "POST":
            // Verarbeiten von POST-Requests
            break;
        case "PUT":
        case "PATCH":
            // Verarbeiten von PUT/PATCH-Requests
            break;
        case "DELETE":
            // Verarbeiten von DELETE-Requests
            break;
        default:
            // Fehlermeldung
            break;
    }

    // Middleware, die den Request weiterleitet
    // der Request wird intern weiteregleitet = bekanntes Netzwerk = CORS Einschränkungen
    // - prüft wer ist der Benutzer
    // - prüft ob der Benutzer die Berechtigung hat, die Aktion auszuführen
    // und die Response von einem anderen Server aus dem internen Netz entgegennimmt
    // oder auch nicht

    // Response senden
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify({ name: "Michael", method: httpMethod }));
};
