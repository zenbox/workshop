// A Simple Login Script

// Declaration
let loginForm = document.querySelector('form');

// DOM - Document Object Model

// Methods
function onLoginFormSubmit(event) {
    // Prevent the browser default behaviour
    event.preventDefault();
    console.log('login form submit ...');

    // - - - - -
    console.log(event.target[1].value);
    console.log(event.target.loginEmail.value);
    // - - - - -

    let loginData = getDataFromLoginForm();
    console.dir(loginData);
    if (loginData) fetchUserDataFromServer();
}

function getDataFromLoginForm() {
    console.log('get form data ...');

    let email = document.querySelector('#login-email').value;
    let password = document.querySelector('#login-password').value;

    return {
        email: email,
        password: password
    };

}

function fetchUserDataFromServer() {
    console.log('fetch data from server ...')
}

// Control, event control
loginForm.addEventListener('submit', onLoginFormSubmit);



















// lassen wir erstmal weg
class Login {}
let myLogin = new Login();