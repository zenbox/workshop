/** Login Controller
 *
 * @description The login controller business logic ...
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
import express, { response } from "express";

// Funktionaler Ansatz für den Controller
const getLoginData = (request, response, next) => {
    // Ausgabe konfigurieren
    const view = "loginView";
    const data = { myData: undefined };

    // Generische Response
    response.status(200).render(view, data);
};

const showUserData = (request, response, next) => {
    // Ausgabe konfigurieren
    const view = "loginView";
    const data = { myData: undefined };

    // Generische Response
    response.status(200).render(view, data);
};

export { getLoginData, showUserData };

// Objektorientierter Ansatz für den Controller
