// ReST API

export default (request, response) => {
    // Request: GET, POST, PUT/PATCH, DELETE

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


    response.statusCode = 200;

    response.setHeader("Content-Type", "application/json");

    response.end(JSON.stringify({ name: "Michael", method: httpMethod }));
};
