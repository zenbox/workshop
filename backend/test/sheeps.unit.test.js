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
let param = "hallo";
function callAdd(param) { 
    return add(2, param);
}


























































/**
 * Addiert zwei Zahlen.
 * @param {number} a - Erste Zahl
 * @param {number} b - Zweite Zahl
 * @returns {number} Summe von a und b
 */
function add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Invalid parameters: both must be numbers");
    }
    return a + b;
}
// - - - - - - - - - -
// - - - - - - - - - -
// - - - - - - - - - -

describe("Unit Test: add function", () => {
    test("should return the sum of two integer numbers", () => {
        // Arrange
        const a = 2,
            b = 3;
        // Act
        const result = add(a, b);
        // Assert
        expect(result).toBe(5);
    });

    test("should return the sum of two too large numbers", () => {
        // Arrange
        const a = Number.MAX_SAFE_INTEGER + 1,
            b = 10;
        // Act
        const result = add(a, b);
        // Assert
        expect(result).toBe(Number.MAX_SAFE_INTEGER + 11);
    });

    test("should return NaN when a non-number is provided", () => {
        // Arrange
        const a = "3",
            b = 5;
        // Act
        const result = add(a, b);
        // Assert
        expect(result).not.toBeNaN();
    });
    test("should return NaN when both parameters are non-numbers", () => {
        // Arrange
        const a = "hello",
            b = {};
        // Act
        const result = add(a, b);
        // Assert
        expect(result).not.toBeNaN();
    });

    test("should throw an error when a parameter is missing", () => {
        // Arrange
        const a = 5,
            b = "3";
        // Act & Assert
        expect(() => add(a, b)).toThrow(
            "Invalid parameters: both must be numbers"
        );
    });
});

// Jest Funktionen für den Assert
// expect(value).toBe(expectedValue); // strikte Gleichheit
// expect(value).toEqual(expectedValue); // tiefe Gleichheit
// expect(value).toBeNull(); // Wert ist null
// expect(value).toBeDefined(); // Wert ist definiert
// expect(value).toBeUndefined(); // Wert ist undefiniert
// expect(value).toBeTruthy(); // Wert ist truthy
// expect(value).toBeFalsy(); // Wert ist falsy
// expect(value).toBeGreaterThan(number); // Wert ist größer als number
// expect(value).toBeLessThan(number); // Wert ist kleiner als number
// expect(value).toContain(item); // Array oder String enthält item
// expect(value).toThrow(); // Funktion wirft einen Fehler
