// sheep.spec.js  –  Playwright API-Testsuite
// Voraussetzung: npm install -D @playwright/test

import { test, expect } from "@playwright/test";

const BASE = "http://localhost:3000/api/sheeps";

// Hilfsfunktion – JSON-Request
async function api(request, method, url, body = null) {
    return request[method.toLowerCase()](url, {
        headers: { "Content-Type": "application/json" },
        ...(body && { data: body }),
    });
}

// --- Testdaten ---
let createdId; // wird zwischen Tests weitergegeben

// ----------------------------------------------------------------
test.describe("🐑 Sheep REST API", () => {
    // --- GET /api/sheeps ---
    test("GET / → gibt alle Schafe zurück", async ({ request }) => {
        const res = await request.get(BASE);

        expect(res.status()).toBe(200);

        const body = await res.json();
        expect(Array.isArray(body)).toBeTruthy();
        expect(body.length).toBeGreaterThan(0);

        // Jedes Objekt hat id und name
        for (const sheep of body) {
            expect(sheep).toHaveProperty("id");
            expect(sheep).toHaveProperty("name");
        }
    });

    // --- GET /api/sheeps/1 ---
    test("GET /:id → gibt ein Schaf zurück", async ({ request }) => {
        const res = await request.get(`${BASE}/1`);

        expect(res.status()).toBe(200);

        const body = await res.json();
        expect(body).toHaveProperty("id", 1);
        expect(body).toHaveProperty("name");
    });

    // --- GET /api/sheeps/9999 (nicht vorhanden) ---
    test("GET /:id → 404 bei unbekannter ID", async ({ request }) => {
        const res = await request.get(`${BASE}/9999`);

        expect(res.status()).toBe(404);

        const body = await res.json();
        expect(body).toHaveProperty("error");
    });

    // --- POST /api/sheeps ---
    test("POST / → legt neues Schaf an", async ({ request }) => {
        const res = await api(request, "POST", BASE, {
            name: "Playwright Sheep",
        });

        expect(res.status()).toBe(201);

        const body = await res.json();
        expect(body).toHaveProperty("id");
        expect(body.name).toBe("Playwright Sheep");

        createdId = body.id; // für folgende Tests merken
    });

    // --- PUT /api/sheeps/:id ---
    test("PUT /:id → aktualisiert ein Schaf", async ({ request }) => {
        expect(createdId).toBeDefined(); // Abhängigkeit zu POST-Test

        const res = await api(request, "PUT", `${BASE}/${createdId}`, {
            name: "Playwright Sheep Updated",
        });

        expect(res.status()).toBe(200);

        const body = await res.json();
        expect(body.id).toBe(createdId);
        expect(body.name).toBe("Playwright Sheep Updated");
    });

    // --- DELETE /api/sheeps/:id ---
    test("DELETE /:id → löscht ein Schaf", async ({ request }) => {
        expect(createdId).toBeDefined();

        const res = await request.delete(`${BASE}/${createdId}`);
        expect(res.status()).toBe(204);
    });

    // --- Nach dem Löschen: GET sollte 404 zurückgeben ---
    test("GET /:id → 404 nach dem Löschen", async ({ request }) => {
        expect(createdId).toBeDefined();

        const res = await request.get(`${BASE}/${createdId}`);
        expect(res.status()).toBe(404);
    });

    // --- Seed-Daten prüfen ---
    test("GET / → enthält Dolly, Shaun und Wooly", async ({ request }) => {
        const res = await request.get(BASE);
        const body = await res.json();
        const names = body.map((s) => s.name);

        expect(names).toContain("Dolly");
        expect(names).toContain("Shaun");
        expect(names).toContain("Wooly");
    });

    // --- POST ohne name → Validierungsfehler ---
    test("POST / → 400 bei fehlendem name", async ({ request }) => {
        const res = await api(request, "POST", BASE, {}); // kein name!
        expect(res.status()).toBe(400);
    });
});
