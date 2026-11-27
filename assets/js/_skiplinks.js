// >>>>>>>
export function initSkiplinks() {
    const container = document.querySelector(".skiplinks");

    if (!container) return;

    const targets = [
        {
            label: "Zum Header springen",
            selector: "body > header, [role='banner']",
            id: "skip-target-header",
        },
        {
            label: "Zur Suche springen",
            selector: "[role='search'], search",
            id: "skip-target-search",
        },
        {
            label: "Zur Navigation springen",
            selector:
                "nav:not(.skiplinks), [role='navigation']:not(.skiplinks)",
            id: "skip-target-navigation",
        },
        {
            label: "Zum Hauptinhalt springen",
            selector: "main, [role='main']",
            id: "skip-target-main",
        },
        {
            label: "Zum Footer springen",
            selector: "body > footer, [role='contentinfo']",
            id: "skip-target-footer",
        },
    ];

    container.replaceChildren();

    for (const target of targets) {
        const element = document.querySelector(target.selector);

        if (!element) continue;

        if (!element.id) {
            let id = target.id;
            let counter = 2;

            while (document.getElementById(id)) {
                id = `${target.id}-${counter++}`;
            }

            element.id = id;
        }

        const link = document.createElement("a");
        link.href = `#${encodeURIComponent(element.id)}`;
        link.textContent = target.label;

        link.addEventListener("click", () => {
            if (!element.hasAttribute("tabindex")) {
                element.setAttribute("tabindex", "-1");
            }

            element.focus({ preventScroll: true });
        });

        container.append(link);
    }

    container.hidden = container.childElementCount === 0;
}
// <<<<<<<
