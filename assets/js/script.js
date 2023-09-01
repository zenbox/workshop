/** UI App Script
 *
 * @desc Login Prozess abarbeiten
 *
 * @package Webapplication
 * @module UI Frontend
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2023-08-31
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2023 Michael Reichart, Cologne
 */
// window.navigator
// window.screen
// window.document

// - - - - -
// Login
// - - - - -
// ES module import
import Login from "./classes/login.js";

// Declaration, Initalization
const login = new Login("form-login");
console.dir(login);

// Event process control
login.form.addEventListener("submit", (event) => {
    login.onSubmit(event);
});

// - - - - -
// Socket.io
// - - - - -
const socket = io("http://localhost:3000", {});

socket.on("socket message", (msg) => {
    console.log(
        `%c${msg}`,
        "color: white;  background: green; font-size: 0.75rem;"
    );
});
