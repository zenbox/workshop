import Color from "./Color.class.js";

let colors = [];
colors[0] = new Color("red", "rgb", 230, 0, 0);
colors[1] = new Color("white", "rgb", 255, 255, 255);

window.onload = () => {
    let red = new Color("red", "rgb", 255, 0, 0);
    console.log(red);

    function contrast(rgb1, rgb2) {
        var lum1 = colors[0].luminance(rgb1[0], rgb1[1], rgb1[2]);
        var lum2 = colors[1].luminance(rgb2[0], rgb2[1], rgb2[2]);
        var brightest = Math.max(lum1, lum2);
        var darkest = Math.min(lum1, lum2);
        return ((brightest + 0.05) / (darkest + 0.05)).toFixed(2);
    }

    function switchDisabilites() {
        document.querySelector("body").classList.toggle("red-disability");
    }
    // - - - - - - - - - -

    let fontButton = document.querySelector("#font-button"),
        fontSizeIndex = localStorage.getItem("fontSize") || 4;

    fontButton.addEventListener("click", (event) => {
        document.querySelector("html").setAttribute("class", "");

        document
            .querySelector("html")
            .classList.add(`font-size-${fontSizeIndex}`);

        localStorage.setItem("fontSize", fontSizeIndex);

        fontSizeIndex++;
    });

    // - - - - - - - - - -
    
    // Font size analysis
    let p = document.querySelector("p"),
        parent = p.parentNode,
        pComputedStyles = window.getComputedStyle(p),
        parentComputedStyles = window.getComputedStyle(parent);
    
    console.log(pComputedStyles.getPropertyValue("font-size"));
    console.log(pComputedStyles.getPropertyValue("color"));
    console.log(parentComputedStyles.getPropertyValue("background-color"));
    console.log(contrast([230, 0, 0], [255, 255, 255]))
    
    // - - - - - - - - - -
};
