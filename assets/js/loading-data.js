// PYTHON STYLE!
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
const login = document.querySelector('#form-login')

// METHODS
function onSubmitLogin(event) {

    let url

    event.preventDefault()

    try {
        url = event.target.action
    } catch (error) {
        console.log(error)
    }

    loadData(url)
}

function loadData(url) {
    try {

        // Promise (ES6)
        fetch(url)
            // if the server response 
            .then(response => {
                console.log(response)
                if (response.ok)
                    return response.json()
                else
                    throw new Error('no data found!')
            })
            // if data === json
            .then((json) => {
                console.log(json)
                setLoginMessage(json)
            })
            .catch((error) => {
                console.log(error)
            });

    } catch (error) {
        console.log(error)
    }
}

function setLoginMessage(data) {
    /*
        document.createElement(),
        document.createTextNode()
        el.setAttribute()
        ctx.appendChild()

        <h4>Welcome Michael</h4>
        <p>your last login at <time>10.03.2021</time></p>
        ...
    */

    // Javascript
    let
        ctx = document.querySelector('#form-login fieldset'),
        h4 = document.createElement('h4'),
        p = document.createElement('p'),
        time = document.createElement('time'),
        username = document.createTextNode(`Welcome, ${data.username}`),
        timestamp = document.createTextNode(`${data.lastLogin} 10:00:00 h`);

    console.dir(ctx);


    h4.appendChild(username);
    time.setAttribute('datetime', `${data.lastLogin} 10:00:00 h`);
    time.appendChild(timestamp);
    ctx.appendChild(h4);
    ctx.appendChild(time);

    // Shorthand alternate method
    ctx.innerHTML = `<h4>Welcome, ${data.username}</h4>
    <p><time date="xyz">${data.lastLogin} 10:00:00 h</time></p>`;

    // jQuery
    $('<h4>')
        .appendTo('#form-login fieldset');

    $('<time>')
        .attr('datetime', `${data.lastLogin} 10:00:00 h`)
        .text(`${data.lastLogin} 10:00:00 h`)
        .appendTo('#form-login fieldset');
}

// EVENT CONTROL
login.addEventListener('submit', onSubmitLogin)


// - - - - - - - - - -



// Alternative
class LoadData {
    constructor() {}
}