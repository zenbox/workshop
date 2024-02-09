document.addEventListener("DOMContentLoaded", function () {
    // - - -

    function getYFromRgb(rgbColor) {
        let rgb = rgbColor.match(/\d+/g);

        let r = rgb[0] / 255;
        let g = rgb[1] / 255;
        let b = rgb[2] / 255;

        let Y = 0.299 * r + 0.587 * g + 0.114 * b;

        return Y;
    }

    function getMichelsonContrast(color1, color2) {
        let Y1 = getYFromRgb(color1);
        let Y2 = getYFromRgb(color2);

        let Lmax = Math.max(Y1, Y2);
        let Lmin = Math.min(Y1, Y2);

        let contrast = (Lmax - Lmin) / (Lmax + Lmin);
        let michelsonContrast = Math.log10(contrast + 1); // Logarithmische Skalierung

        return michelsonContrast;
    }

    let colorElements = document.querySelectorAll(".color");

    colorElements.forEach((element) => {
        let bgColor = window.getComputedStyle(element).backgroundColor;
        let textColor = window.getComputedStyle(element).color;

        let michelson = getMichelsonContrast(bgColor, textColor);

        element.querySelector("p").innerHTML += michelson.toFixed(2);
    });

    // - - -
});
