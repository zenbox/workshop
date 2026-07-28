/** Login Route
 *
 * @description Output generator ES-module for a login page and ...
 *
 * @package MySoftware
 * @module login
 * @author Michael Reichart <michael.reichart@gfu.net>
 * @version 1.0.0
 * @since 1.0.0 || 2026-07-28
 * @license MIT
 * @copyright ...
 */

// 0. Interpreter-Anweisung
"use strict";

// 1.1 Interne Libraries
// keine

// 1.2 Externe Libraries
import express, { Router } from "express";

// 1.3 Eigene Module (Libraries)
import { getLoginData } from "../controllers/loginController.js";

// 2.1 Variablendeklaration
// keine

// 2.2 Konfiguration
const router = express.Router();

router.get("/", getLoginData);

// Am Ende der Route wollen wir
// reponse.status(200).render(view, data)))

export default router;
