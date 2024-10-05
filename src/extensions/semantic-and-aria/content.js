// Liste wichtiger semantischer Elemente, die hervorgehoben werden sollen
const semanticTags = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "nav",
    "article",
    "section",
    "header",
    "footer",
    "main",
    "aside",
    "figure",
    "figcaption",
    "button",
    "form",
    "fieldset",
    "legend",
    "label",
    "ul",
    "ol",
    "li",
    "table",
    "th",
    "tr",
    "td",
    "caption",
    "summary",
];

// Liste der Attribute, die wir hervorheben wollen
const importantAttributes = [
    "aria-label",
    "aria-labelledby",
    "role",
    "tabindex",
];

// Funktion zur Erstellung einer schwebenden Textbox
function createTooltip(text, element) {
    const tooltip = document.createElement("div");
    tooltip.className = "semantic-tooltip";
    tooltip.textContent = text;

    // Positionierung der Tooltip-Box
    const rect = element.getBoundingClientRect();
    tooltip.style.top = `${rect.top + window.scrollY}px`;
    tooltip.style.left = `${rect.right + 10}px`;

    document.body.appendChild(tooltip);
}

// Funktion zur Hervorhebung von Elementen
function highlightElement(element, text, color) {
    element.style.outline = `2px dotted ${color}`;

    // Erstelle die Textbox
    createTooltip(text, element);
}

// Funktion zur Analyse des Dokuments
function analyzeDocument() {
    // Hebe semantische Tags hervor
    semanticTags.forEach((tag) => {
        document.querySelectorAll(tag).forEach((element) => {
            highlightElement(element, `Tag: ${tag.toUpperCase()}`, "blue");
        });
    });

    // Hebe Attribute hervor (aria-label, role, tabindex)
    importantAttributes.forEach((attr) => {
        document.querySelectorAll(`[${attr}]`).forEach((element) => {
            const value = element.getAttribute(attr);
            highlightElement(element, `${attr}: ${value}`, "green");
        });
    });

    // Hebe Elemente mit Tab-Indizes hervor
    document.querySelectorAll("[tabindex]").forEach((element) => {
        const tabindex = element.getAttribute("tabindex");
        highlightElement(element, `Tab-Index: ${tabindex}`, "purple");
    });
}

// Starte die Analyse, sobald der Inhalt geladen ist
window.onload = () => {
    analyzeDocument();
};
