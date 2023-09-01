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
        let el = document.createElement("p");
        let text = document.createTextNode(`Hallo ${data.firstname}`);
        const context = document.querySelector("#header");
        el.appendChild(text);
        context.appendChild(el);
    }
}
