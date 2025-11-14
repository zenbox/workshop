/** Backend Service
 *
 * @desc Kein Webservice mehr, nur noch Backend Service
 *
 * @package Backend Service
 * @module index.js
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2025-11-13
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2025 Michael Reichart, Cologne
 */

// ES Module Imports
import http from "node:http";
import app from "./app.js";

const PORT = process.env.PORT || 4040;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Backend Service is running on port ${PORT}`);
});
