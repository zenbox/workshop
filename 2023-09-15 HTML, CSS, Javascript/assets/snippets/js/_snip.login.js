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
