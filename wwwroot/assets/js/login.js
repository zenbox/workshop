/** A Simple Login Script
 *
 * @package Webapplication
 * @module Login
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2023-02-28
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2023 Michael Reichart, Cologne
 */

$(document).ready(() => {
    "use strict";
    // - - - - - - - - - -
    // DECLARATION
    let form = "#form-login",
        inputEmail = "#login-input-email",
        inputPassword = "#login-input-password",
        email = undefined,
        password = undefined;

    // METHODS
    // Processing methods
    function login(email = undefined, password = undefined) {
        // Plausibility tests ...
        if (email === undefined || !password) {
            return false;
        }

        try {
            // - - -
            $.ajax({
                url: "login/",
                type: "GET",
                data: { email: email, password: password },
                success: onLoginSuccess,
            });
            // - - -
        } catch (error) {
            console.log(error);
        }
    }

    // Event handler
    function onLogin(event) {
        // Stops the browser processing
        event.preventDefault();

        try {
            // - - -
            email = $(inputEmail).val();
            password = $(inputPassword).val();

            // Plausibility tests ...
            console.log(email, password);

            // Further processing
            login(email, password);

            // - - -
        } catch (error) {
            console.log(error);
        }

        console.log("login");
    }

    function onLoginSuccess(response) {
        console.log(response);

        let aside = $("aside");
        // Removing contents
        $("aside form").remove();

        // New Elements with data
        let userParagraph = $("<p>");
        userParagraph.text(
            `Willkommen ${response.prename} ${response.lastname}`
        );
        $(aside).append(userParagraph);

        let dateParagraph = $("<p>"),
            date = new Date(response["last login"]).toLocaleDateString();
        
        dateParagraph.text(`Du warst am ${date} das letzte Mal hier ...`);
        $(aside).append(dateParagraph);
    }

    // CONTROLS
    $(form).on("submit", onLogin);

    // - - - - - - - - - -
});
