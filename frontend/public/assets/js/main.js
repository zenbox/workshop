/** FONTEND ReST API
 *
 * @package Webapplication
 * @module
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2025-11-13
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2025 Michael Reichart, Cologne
 */

const API = "http://localhost:4040/api";
let listWrapper;
let createForm;
let nameInput;

// Lade ein Schaf anhand der ID
async function loadSheepById(id) {
    try {
        const response = await fetch(`${API}/sheeps/${id}`);
        if (!response.ok) throw new Error("Fehler beim Laden des Schafs");

        const sheep = await response.json();
        alert(`Schaf: ${sheep.name}`);
    } catch (error) {
        console.error(error);
    }
}

// Lade alle Schafe
async function loadAllSheeps() {
    try {
        const response = await fetch(`${API}/sheeps`);

        if (!response.ok) throw new Error("Fehler beim Laden der Schafe");

        const sheeps = await response.json(); // Objekt!
        // const sheeps = await response.text(); // String

        listWrapper.innerHTML = sheeps
            .map(
                (sheep) =>
                    `<li><a href="#" data-id="${sheep.id}">${sheep.name}</a></li>`
            )
            .join("");
    } catch (error) {
        console.error(error);
    }
}

// ! Neues Schaf anlegen!
async function createNewSheep(name) {
    try {
        const response = await fetch(`${API}/sheeps`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name }),
        });

        if (!response.ok) throw new Error("Fehler beim Anlegen des Schafs");

        const newSheep = await response.json();
        console.log("Neues Schaf angelegt:", newSheep);
        await loadAllSheeps(); // Liste aktualisieren
        return newSheep;
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    listWrapper = document.getElementById("sheepList");
    // ! Formular und Input referenzieren!
    createForm =
        document.querySelector("[data-role='sheep-form']") ||
        document.getElementById("sheepForm");
    nameInput =
        document.querySelector("[data-role='sheep-name']") ||
        document.getElementById("sheepName");

    if (listWrapper) {
        listWrapper.addEventListener("click", async (event) => {
            event.preventDefault();
            const target = event.target;

            if (target.tagName === "A") {
                const sheepId = target.dataset.id;
                if (sheepId) await loadSheepById(sheepId);
            }
        });

        loadAllSheeps();
    }

    // ! Formular Submit Event behandeln!
    if (createForm) {
        createForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            const name = (nameInput?.value ?? "").trim();

            if (!name) return;

            await createNewSheep(name);
            createForm.reset();
            nameInput?.focus();
        });
    }
});
