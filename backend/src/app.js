/** Application Service
 *
 * @package Backend Service
 * @module
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2025-11-13
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2025 Michael Reichart, Cologne
 */

import express from "express";
// ! Morgan für Konsolenausgaben importieren
import morgan from "morgan";
import cors from "cors";
import sheepsRouter from "./routes/sheeps.js";

const app = express();
// Express Konfigurationen
// Developer State
app.use(cors({ origin: true, credentials: true }));
// ! Morgan Middleware aktivieren,
app.use(morgan("dev"));
app.use(express.json()); // ! Body Parser für JSON

// Production State
// app.use(cors( {origin: "https://my-frontend.org", credentials: true} ));

// Health Route (Beispiel)
app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

// ReST Routing Einstieg
app.use("/api/sheeps", sheepsRouter);

// ES Module Export
export default app;
