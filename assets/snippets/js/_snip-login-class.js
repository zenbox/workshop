/** Login ...
 *
 * @desc Login für UI
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

export default class Login {
    constructor(selector) {
        this.form = document.getElementById(selector);
        this.loadData();
    }

    onSubmit(event) {
        event.preventDefault();
        this.loadData();
    }

    async loadData() {
        // AJAX
        // let url = "http://172.25.33.83:3000";
        let url = "http://localhost:3000/login";
        const clientData = {
            email: "michael.reichart@gfu.net",
            password: "geheim",
        };
        let clientDataString = JSON.stringify(clientData);
        const options = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: clientDataString,
        };
        // Promise
        await fetch(url, options)
            .then(async (response) => await response.json())
            .then((data) => {
                console.log(data);
                this.buildMessage(data);
            })
            .catch((error) => console.log(error));
    }

    buildMessage(data) {
        let lastLogin = new Date(data.lastLogin).toLocaleDateString();

        if (document.getElementById("message") !== null)
            document.getElementById("message").remove();

        const p = document.createElement("p");
        p.classList.add("message");
        p.id = "message";
        const text = document.createTextNode(
            `Hallo ${data.firstname}. Nice to see you again, your last login was on ${lastLogin}. You are looged in as ${data.role}. Have a nice and successful day!`
        );
        const context = document.querySelector("#messages");
        p.appendChild(text);
        context.appendChild(p);
    }
}
