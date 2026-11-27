// >>>>>>>
import { readA11ySettings, saveA11ySettings } from "./_a11y-storage.js";

export function initScale() {
    const input = document.querySelector("#text-scale");
    const output = document.querySelector("#text-scale-value");

    if (!input || !output) return;

    const saved = readA11ySettings().scale;
    const scale =
        Number.isInteger(saved) &&
        saved >= 80 &&
        saved <= 200 &&
        saved % 5 === 0
            ? saved
            : 100;

    function applyScale(value) {
        document.documentElement.style.fontSize = `${value}%`;
        input.value = value;
        output.textContent = `${value} %`;
        input.setAttribute("aria-valuetext", `${value} Prozent`);
    }

    input.addEventListener("input", () => {
        const value = Number(input.value);
        applyScale(value);
        saveA11ySettings({ scale: value });
    });

    applyScale(scale);
}
// <<<<<<<
