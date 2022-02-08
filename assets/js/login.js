// A Simple Login Script

// Declaration
let loginForm = document.querySelector('form');

// DOM - Document Object Model

// Methods
function onLoginFormSubmit(event) {
    // Prevent the browser default behaviour
    event.preventDefault();

    let
        _loginData = getDataFromLoginForm(),
        _serverData = undefined;

    if (_loginData)
        _serverData = fetchUserDataFromServer(_loginData);

    if (_serverData)
        createAWelcomeMessage(_serverData);
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
        .then((serverData) => {
            return serverData;
        })
        .catch((error) => {
            console.dir(error);
            return false;
        });


}

// Control, event control
loginForm.addEventListener('submit', onLoginFormSubmit);
// loginForm.addEventListener('change', onLoginFormChange);




















// lassen wir erstmal weg
class Login {}
let myLogin = new Login();