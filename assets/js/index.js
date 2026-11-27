// >>>>>>>
import { initSkiplinks } from "./_skiplinks.js";
import { initTheme } from "./_theme.js";
import { initScale } from "./_scale.js";
import { initLoginForm } from "./_login-form.js";

function init() {
    initSkiplinks();
    initTheme();
    initScale();
    initLoginForm();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}
// <<<<<<<
