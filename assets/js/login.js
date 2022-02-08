
// IFEE-Pattern
// Immediate Invoked Function Expression
// (Selbstaufrufende Funktion)
// build a scope!
(function () {
    'use strict';
    // - - - - - - - - - -
    // A Simple Login Script

    // Declaration
    let
        loginForm = document.querySelector('form');

    var a = 42;

    // DOM - Document Object Model

    // Methods
    function onLoginFormSubmit(event) {
        // Prevent the browser default behaviour
        event.preventDefault();

        let
            _loginData = getDataFromLoginForm();

        if (_loginData)
            fetchUserDataFromServer(_loginData);
    }

    function getDataFromLoginForm() {
        try {
            let email = document.querySelector('#login-email').value;
            let password = document.querySelector('#login-password').value;
            return {
                email: email,
                password: password
            };
        } catch (error) {
            console.dir(error);
            return false;
        }

    }

    function fetchUserDataFromServer(loginData) {
        let
            _email = loginData.email,
            _password = loginData.password;

        if (!_email) return false;
        if (!_password) return false;

        // Asyncronous fetch
        // promise!
        fetch('data/userData.json', {
                method: 'GET', // POST!
                headers: {
                    'Content-Type': 'application/json'
                },
                //            body: JSON.stringify(loginData)
            })
            .then((response) => {
                if (response.ok) {
                    // Second promise!
                    return response.json();
                } else {
                    throw new Error('Could not load data ...');
                }
            })
            .then((_serverData) => {
                createWelcomeMessage(_serverData);
                return true;
            })
            .catch((error) => {
                console.dir(error);
                return false;
            });


    }

    function createWelcomeMessage(_data) {
        console.log('Welcome');
        /*
            <h2>Welcome Michael</h2>
            <p>Your last login was on 22/02/08</p>
            <p>Your are logged in as administrator.</p>
         */

        // DOM Manipulation 
        // Creating new HTML elements
        let
            h2 = document.createElement('h2'),
            p_1 = document.createElement('p'),
            p_2 = document.createElement('p'),

            h2Text = document.createTextNode(`Welcome ${_data[0].username}`);

        // Append to document
        let context = document.querySelector('#login-container');

        h2.appendChild(h2Text);
        context.appendChild(h2);

        // Remove elements
        document.querySelector('#form-login').remove();


        // Attributes
        context.setAttribute('class', 'green');

        // Classes
        context.classList.add('red');
        context.classList.toggle('hidden');
        context.classList.remove('green');

        setTimeout(() => {
            context.classList.toggle('hidden');
        }, 5000);

        // Shorthand methods
        document.querySelector('footer').innerText = 'The new <strong>footer</strong> text ...'
        document.querySelector('footer').innerHTML = 'The new <strong>footer</strong> text ...'

        // Styles?
        console.dir(context);
        context.style.backgroundColor = 'red';

    }

    // Control, event control
    loginForm.addEventListener('submit', onLoginFormSubmit);
    // loginForm.addEventListener('change', onLoginFormChange);




    console.log('login:', a);
    setTimeout(() => {
        console.log('login:', a);
    }, 5000);



    console.dir(window);











    // lassen wir erstmal weg
    class Login {}
    let myLogin = new Login();





    // - - - - - - - - - -
}());