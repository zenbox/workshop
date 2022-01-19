/** Login Script
 *
 * @desc   login process: 
 *         1. form submit; 
 *         2. server-client communcation; 
 *         3. dom manipulate - content changes
 * 
 * @package Webapplication
 * @module login
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2022-01-19
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2022 Michael Reichart, Cologne
 */


// Immediate Invoked Function Expression - IIFE
(function () {
    'use strict';
    // - - - - - - - - -

    // Declaration
    const DEBUG = true;
    var a = 42;
    let

        loginForm = document.querySelector('#login'),
        userEmail = undefined,
        userPassword = undefined,
        userData = {};

    // Functions
    function onLogin(event) {
        // Browser stops ...
        event.preventDefault();

        userEmail = event.target[0].value;
        userPassword = event.target[1].value;

        loadDataFromServer(userEmail, userPassword);

        return true;
    }

    function loadDataFromServer(email, password) {

        // asynchronous fetching data from server
        // it's a Promise!
        fetch('data/userData.json')
            .then((response) => {
                if (response.ok) return response.json();
                else {
                    throw new Error('could not load data ...')
                }
            })
            .then((jsonData) => {
                userData = jsonData;
                removeLoginForm();
                createWelcomeMessage();

                document.querySelector('.modal').classList.toggle('modal-hidden');
                setTimeout(() => document.querySelector('.modal').classList.toggle('modal-hidden'), 2000)
            })
            .catch((error) => console.log(error));

        // fake data ...
        // userData = {
        //     "prename": "Michael",
        //     "surname": "Reichart",
        //     "lastLogin": new Date()
        // };
    }

    function removeLoginForm() {
        try {
            loginForm.remove();
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    function createWelcomeMessage() {
        userData.prename;
        userData.surname;
        userData.lastLogin;
        /*
            <aside>
                <section id="welcome">
                    <h4>Welcome Michael</h4>
                    <p>Your last login was on <time>19.12.2022</time>.</p>
                </section>


            </aside>
        */
        console.clear();
        console.log('create Welcome');

        // Create new DOM elements
        let
            section = document.createElement('section'),
            headline = document.createElement('h4'),
            paragraph = document.createElement('p'),

            // headlineText = document.createTextNode('lirumlarumlöffelstiel'),

            context = document.querySelector('main+aside');

        headline.innerText = `Welcome ${userData.prename}!`;
        paragraph.innerHTML = `Your last login was on <time date="2022-01-19">${userData.lastLogin}</time>`;


        // Make it visible!
        section.appendChild(headline);
        section.appendChild(paragraph);
        context.appendChild(section);

    }

    // Control
    loginForm.addEventListener('submit', onLogin);
    // loginForm.onsubmit = 


    // - - - - - - - - - -
}())

console.dir(window)