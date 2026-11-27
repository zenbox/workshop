// >>>>>>>
const STORAGE_KEY = "a11y-settings:v1";

export function readA11ySettings() {
    try {
        const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

        return value && typeof value === "object" && !Array.isArray(value)
            ? value
            : {};
    } catch {
        return {};
    }
}

export function saveA11ySettings(changes) {
    try {
        const settings = { ...readA11ySettings(), ...changes };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
        // Die Einstellungen bleiben für die aktuelle Seite nutzbar,
        // auch wenn localStorage nicht verfügbar ist.
    }
}
// <<<<<<<
