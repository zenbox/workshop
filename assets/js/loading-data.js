/** LOGIN FORM
 *
 *  @desc 
 *
 * @package Webapplication
 * @module 
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2021-03-10
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2021 Michael Reichart, Cologne
 */

// DECLARATION
const login = document.querySelector('#form-login');

// METHODS
function onSubmitLogin(event) {

    let url;

    event.preventDefault();

    try {
        url = event.target.action;
    } catch (error) {
        console.log(error);
    }

    loadData(url);
}

function loadData(url) {
    try {

        // Promise (ES6)
        fetch(url)
            .then(response => {
                console.log(response);
            })
        // .then( () => {} )
        // .catch( () => {} );

    } catch (error) {
        console.log(error);
    }
}

function createContent() {}

// EVENT CONTROL
login.addEventListener('submit', onSubmitLogin);


// - - - - - - - - - -



// Alternative
class LoadData {
    constructor() {}
}