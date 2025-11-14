import puppeteer from "puppeteer";

describe("Sheep Frontend", () => {
    let browser;
    let page;

    // Common Setup and Teardown
    beforeAll(async () => {
        browser = await puppeteer.launch({ headless: "new" });
        page = await browser.newPage();

        // Browser-Logs sichtbar machen
        page.on("console", (msg) => {
            console.log("BROWSER LOG:", msg.type(), msg.text());
        });

        page.on("pageerror", (err) => {
            console.error("PAGE ERROR:", err);
        });

        const fakeStore = [];

        // await page.setRequestInterception(true);

        // page.on("request", async (req) => {
        //   const url = req.url();
        //   const method = req.method();

        //   console.log("REQUEST:", method, url);

        //   // Alles, was nicht unser API-Endpunkt ist, normal durchlassen
        //   if (!url.includes("/api/sheeps")) {
        //     return req.continue();
        //   }

        //   console.log("MOCK GREIFT für:", method, url);

        //   // Gemeinsame CORS-Header
        //   const corsHeaders = {
        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
        //     "Access-Control-Allow-Headers": "Content-Type, Authorization",
        //   };

        //   if (method === "OPTIONS") {
        //     return req.respond({
        //       status: 204,
        //       headers: corsHeaders,
        //     });
        //   }

        //   if (method === "POST") {
        //     const rawBody = req.postData() || "";
        //     console.log("POST Body (raw):", rawBody);

        //     let body = {};
        //     // Robust: erst JSON versuchen, sonst URL-encoded
        //     try {
        //       body = JSON.parse(rawBody);
        //     } catch (e) {
        //       try {
        //         body = Object.fromEntries(new URLSearchParams(rawBody));
        //       } catch {
        //         body = {};
        //       }
        //     }

        //     const newItem = {
        //       id: fakeStore.length + 1,
        //       title: body.title || "ohne Titel",
        //       date: body.date || "2025-01-01",
        //     };

        //     fakeStore.push(newItem);

        //     return req.respond({
        //       status: 201,
        //       contentType: "application/json",
        //       headers: corsHeaders,
        //       body: JSON.stringify(newItem),
        //     });
        //   }

        //   if (method === "GET") {
        //     const responseBody = { items: fakeStore, count: fakeStore.length };

        //     return req.respond({
        //       status: 200,
        //       contentType: "application/json",
        //       headers: corsHeaders,
        //       body: JSON.stringify(responseBody),
        //     });
        //   }

        //   // Alle anderen Methoden stubben
        //   return req.respond({ status: 204, headers: corsHeaders });
        // });

        await page.goto("http://localhost:8080");
    });

    afterAll(async () => {
        await browser.close();
    });

    test("zeigt Überschrift und Liste", async () => {
        // Arrange
        await page.waitForSelector("h1", { timeout: 5000 });
        // Act
        const heading = await page.$eval("h1", (el) => el.textContent);
        // Assert
        expect(heading).toContain("Meine vielen Schafe");

        // Act
        const listItems = await page.$$eval(
            "#sheepList li",
            (items) => items.length
        );
        // Assert
        expect(listItems).toBeGreaterThanOrEqual(0);
    });

    test("legt ein neues Schaf-Event an und zeigt es in der Liste", async () => {
        const newTitle = `Schaf ${Date.now()}`;

        await page.waitForSelector("[data-role=sheep-name]", {
            timeout: 5000,
        });
        await page.focus("[data-role=sheep-name]");
        await page.keyboard.type(newTitle);
        await page.click('form button[type="submit"]');

        await page.waitForFunction(
            (title) =>
                Array.from(document.querySelectorAll("#sheepList li")).some(
                    (li) => li.textContent.includes(title)
                ),
            { timeout: 5000 },
            newTitle
        );

        const listContains = await page.$$eval(
            "#sheepList li",
            (items, title) =>
                items.some((li) => li.textContent.includes(title)),
            newTitle
        );
        expect(listContains).toBe(true);
    });
});
