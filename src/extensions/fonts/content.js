// Funktion zum Berechnen der Michelson-Kontraste
function calculateMichelsonContrast(foregroundColor, backgroundColor) {
    const fgLuminance = getLuminance(foregroundColor);
    const bgLuminance = getLuminance(backgroundColor);
    return (fgLuminance - bgLuminance) / (fgLuminance + bgLuminance);
}

// Luminanzberechnung aus RGB
function getLuminance(color) {
    const rgb = color
        .match(/\d+/g)
        .map(Number)
        .map((c) => c / 255);
    const [r, g, b] = rgb.map((c) =>
        c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    );
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// Funktion zur Ermittlung der verwendeten Schriftarten und der Mittelhöhe
function getFontsAndMetrics() {
    const elements = document.querySelectorAll("body *");
    const fonts = [];
    elements.forEach((element) => {
        const style = window.getComputedStyle(element);
        const fontSize = parseFloat(style.fontSize);
        const fontFamily = style.fontFamily;
        const color = style.color;
        const backgroundColor = style.backgroundColor;

        if (!fontFamily) return;

        // Berechne die Mittelhöhe (x-Höhe) einer Schrift basierend auf canvas
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        context.font = style.font;
        const textMetrics = context.measureText("x");
        const xHeight = textMetrics.actualBoundingBoxAscent;

        const contrast = calculateMichelsonContrast(color, backgroundColor);

        fonts.push({
            element,
            fontFamily,
            fontSize,
            xHeight,
            ratio: (xHeight / fontSize).toFixed(2),
            contrast: contrast.toFixed(2),
        });
    });
    return fonts;
}

// Daten sammeln und an den Hintergrund (DevTools-Panel) senden
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getFontMetrics") {
        const data = getFontsAndMetrics();
        sendResponse({ fonts: data });
    }
});
