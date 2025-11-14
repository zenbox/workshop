/**
 * @file Integrationstests für die Sheeps-API.
 * npm install --save-dev supertest
 * npm install --save-dev @jest/globals
 * @module events.int.test
 * @requires supertest
 * @requires ../src/server.js
 */
import request from "supertest";
import { describe, test, expect, jest } from "@jest/globals";

// ============================================================
// Unit-Test-Beispiel: Reine Funktion testen
// ============================================================

/**
 * Addiert zwei Zahlen.
 * @param {number} a - Erste Zahl
 * @param {number} b - Zweite Zahl
 * @returns {number} Summe von a und b
 */
function add(a, b) {
    return a + b;
}

add(3, 4);
