/** Login
 *
 * @package Webapplication
 * @module Homepage
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2023-03-13
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2023 Michael Reichart, Cologne
 */
class Login {
    /**
     * @param   {string} email - an email adress
     * @param   {string} password - any password value
     * @returns {boolean}
     */
    constructor(email = undefined, password = undefined) {
        this.email = email;
        this.password = password;
    }
    onLogin(event) {
        // Stops browser processing
        event.preventDefault();

        try {
            this.email = form.querySelector("#email");
            this.password = form.querySelector("#password");

            let url = "assets/data/userData.json";
            this.send(url);
        } catch (error) {
            console.error(error);
        }
    }

    send(url) {
        // Send something to and get from a server
        // via fetch()-Promise!
        // internal JSON.parse(stringValue)!
        fetch(url)
            .then((response) => response.json())
            .then((userData) => {
                this.createUserMessage(userData);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    createUserMessage(userData) {
        console.log("create message ...");

        // DOM manipulation
        // 1. Create elements and Attributes
        /*
            <div class="message" id="message">
                <p>Hello Martin</p>
                <p>Your last login was on 2023/02/28.
            </div>
         */
        // How to create new DOM objects
        let message = document.createElement("div"),
            context = document.querySelector("main");

        message.setAttribute("id", "message");
        message.id = "message";
        message.classList.remove("old");
        message.classList.add("message");

        console.log(userData);
        console.log(typeof userData);

        // Lazy way for new content
        message.innerHTML = `<p>${userData.prename}
                                ${userData.surname}</p>
                             <p>Your last login was on ${userData.lastLogin}</p>    
                            `;
        // Append to DOM
        context.appendChild(message);

        // Remove from DOM
        document.querySelector("#login").remove();
    }
}

// PROCESS
// DECLARATION
const login = new Login();
const form = document.querySelector("#login"); // delivers an object

// CONTROL
form.addEventListener("submit", (event) => login.onLogin(event)); // inside: addEventListener.fn(event)

/*
// console.log((0.1+0.2))

// console.log(login.email);
// if (email === undefined) { }
// if (typeof email === "undefined") { }
// if (email === null) { }
// Types in Javascript

// Primitive value types
let a = 42; // number
const PI = 3.14159;
let b = "a text value";
let t = true;
let f = false;

let n = null;
let u = undefined;

// Multiple value types
let obj = { zahl: 42, text: "a text value", flag: false }; // object
let arr = [42, "a text value", false]; // array

// console.log(arr.length);
// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));

// Functions
let fn = function () { }
fn()
console.log( fn)
// function fn2() { }
// f2();

// // C++, C#, Java
// int fn3() { 
//     return 42;
// }
*/
