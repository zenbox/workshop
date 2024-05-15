/**
 * @desc Some nice function stuff
 *
 * @package Webapplication
 * @module homepage
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2024-05-15
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2024 Michael Reichart, Cologne
 */
// ACCESSIILITY SWITCH
document.addEventListener("DOMContentLoaded", () => {
    const accessible = document.querySelector("#accessible");

    accessible.addEventListener("click", (event) => {
        event.preventDefault();
        document.querySelector("html").classList.toggle("accessible");
        accessible.textContent = `Accessibility helper ${
            document.querySelector("html").classList.contains("accessible")
                ? "on"
                : "off"
        }`;
    });

    // DEV MODE
    const devMode = document.querySelector("#dev-mode");

    devMode.addEventListener("click", (event) => {
        event.preventDefault();
        document.querySelector("html").classList.toggle("dev");
        devMode.textContent = `Dev mode ${
            document.querySelector("html").classList.contains("dev") ? "on" : "off"
        }`;
    });
});

// LOGIN FORM
document.addEventListener("DOMContentLoaded", () => {
    const email = document.getElementById("login-email");
    email.setAttribute(
        "pattern",
        "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
    );
});
