// >>>>>>>
import { initSkiplinks } from "./_skiplinks.js";
import { initTheme } from "./_theme.js";
import { initScale } from "./_scale.js";

function init() {
    initSkiplinks();
    initTheme();
    initScale();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}
// <<<<<<<
