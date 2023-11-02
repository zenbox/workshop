import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    request: NextApiRequest,
    response: NextApiResponse
) {
    // GET => request.query delivers data from client
    // POST => request.body delivers data from client

    console.log(request.body);

    // Middleware i.e. database connection ...
    const users = [
        { id: 1, name: "Diego" },
        { id: 2, name: "Dani" },
        { id: 3, name: "Rafa" },
    ];

    // response.status()
    // response.write()
    // response.write()
    // response.write()
    // response.end()

    return response.status(200).json(users);
}
