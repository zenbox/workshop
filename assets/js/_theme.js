// >>>>>>>
import { readA11ySettings, saveA11ySettings } from "./_a11y-storage.js";

export function initTheme() {
    const button = document.querySelector(".theme-button");
    const label = button?.querySelector(".theme-button__label");

    if (!button || !label) return;

    const root = document.documentElement;
    const systemContrast = window.matchMedia("(forced-colors: active)");

    const themes = [
        { className: "theme-light", name: "Hell" },
        { className: "theme-dark", name: "Dunkel" },
        { className: "theme-high-contrast", name: "Hoher Kontrast" },
    ];

    const savedTheme = readA11ySettings().theme;
    const savedIndex = themes.findIndex(
        (theme) => theme.className === savedTheme
    );
    const classIndex = themes.findIndex((theme) =>
        root.classList.contains(theme.className)
    );

    let current = savedIndex >= 0 ? savedIndex : Math.max(0, classIndex);

    function applyTheme() {
        const systemActive = systemContrast.matches;
        const active = systemActive ? themes[2] : themes[current];
        const next = themes[(current + 1) % themes.length];

        root.classList.remove(...themes.map((theme) => theme.className));
        root.classList.add(active.className);

        button.disabled = systemActive;
        label.textContent = systemActive
            ? "System-Hochkontrast aktiv"
            : active.name;

        button.setAttribute(
            "aria-label",
            systemActive
                ? "System-Hochkontrast aktiv"
                : `Darstellung: ${active.name}. Zu ${next.name} wechseln`
        );
    }

    button.addEventListener("click", () => {
        current = (current + 1) % themes.length;
        saveA11ySettings({ theme: themes[current].className });
        applyTheme();
    });

    systemContrast.addEventListener("change", applyTheme);
    applyTheme();
}
// <<<<<<<
