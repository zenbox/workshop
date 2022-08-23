/**
 * @desc A simple client script example:
 *       1. Socket client
 *       2. Socket events
 *       3. Page handling, i.e. login form
 */

console.log('c l i e n t  r u n s ...');

// - - - - - - - - - -
// Sockets and stuff
// - - - - - - - - - -
let socket = io();
let id = (document.querySelector('#id').value = localStorage.getItem('id')) || document.querySelector('#id').value;

document
    .querySelector('#id')
    .onchange = () => {
        id = document.querySelector('#id').value;
        let old = localStorage.getItem('id');
        localStorage.setItem('id', id = document.querySelector('#id').value);
        socket.emit('client', `${old || socket.id} changed to ${id}`)

    };

// - - - - - - - - - -
// Sockets events
// - - - - - - - - - -
socket.on('connect', function () {
    socket.emit('client', `${id || socket.id} connect`)
})
socket.on('disconnect', function () {
    socket.emit('client', `${id || socket.id} disconnect`)
})
socket.on('reconnect_attempt', function () {
    socket.emit('client', `${id || socket.id} reconnect_attempt`)
})
socket.on('reconnect_failed', function () {
    socket.emit('client', `${id || socket.id} reconnect_failed`)
})
socket.on('reconnect_error', function () {
    socket.emit('client', `${id || socket.id} reconnect_error`)
})
socket.on('ping', function () {
    socket.emit('client', `${id || socket.id} ping`)
})
socket.on('error', function () {
    socket.emit('client', `${id || socket.id} error`)
})
socket.on('broker message', function (msg) {
    console.log(msg)
});

// - - - - - - - - - -
// Page handling
// - - - - - - - - - -

/** onLogin
 * @desc on login grabs the login form data, 
 *       fetch the json data from server 
 *       and redirect to a new page.
 * @param {*} event 
 * 
 * todo: Error handling for json data
 */
let formLogin = document.querySelector('form#login');

if (formLogin) formLogin.addEventListener('submit', onLogin);

async function onLogin(event) {
    let url1 = event.target.action;

    event.preventDefault();

    const response = await fetch(url1, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const data = await response.json();

    let url2 = `index.html?username=${data['username']}&last-login=${data['last-login']}`;

    window.location.href = url2;

    // Tell the broker ...
    socket.emit('client', `${id || socket.id} logs in ...`)
}

/** onPostInterface
 * @desc Shows/hides the interface to edit a post entry.
 *       The interface can edit and delete.
 * @param {string} id - the post id, if available
 */
let posts = document.querySelectorAll('.post');
let button = {};

button['post'] = document.querySelector('button');
button['post'].addEventListener('click', onPost);

if (posts) posts.forEach(post => post.addEventListener('mouseenter', onPostInterface));
if (posts) posts.forEach(post => post.addEventListener('mouseleave', onPostInterface));

async function onPostInterface(event) {
    if (event.type == 'mouseenter') event.target.appendChild(setInterface(event.target.id));
    if (event.type == 'mouseleave') document.querySelector('#interface').remove();
}

/**
 * @desc setInterface creates an edit and a patch button.
 * @param {string} id - the post id
 */
function setInterface(id) {
    let
        container = document.createElement('div');

    button['patch'] = document.createElement('button');
    button['delete'] = document.createElement('button');

    button['patch'].appendChild(document.createTextNode('patch'));
    button['patch'].dataset.id = id;
    button['patch'].addEventListener('click', onPatch);

    button['delete'].appendChild(document.createTextNode('delete'));
    button['delete'].dataset.id = id;
    button['delete'].addEventListener('click', onDelete);

    container.setAttribute('id', 'interface');
    container.appendChild(button['patch']);
    container.appendChild(button['delete']);

    return container;
}

/**
 * @desc The delete function deletes a document by id.
 *       The response is a reload:true/false.
 * @param {object} event 
 */
async function onDelete(event) {
    console.log('ON DELETE');

    let id = event.target.dataset.id;

    const response = await fetch(`rest/delete/${id}`, {
        method: 'DELETE',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const data = await response.json();
    if (data.reload === true) {
        console.log('reloading ...');
        window.location.reload(true);
    }
}

/**
 * @desc The patch function updates a document by id.
 *       The response is a reload:true/false.
 * @param {object} event 
 * TODO: generating the new texts serverside and receive via fetch
 */
async function onPut(event) {
    console.log('ON PUT');

    let id = event.target.dataset.id;
    let newTitle = 'That\'s the patched title.';
    let newContent = 'Put fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.';
    const response = await fetch(`rest/put/${id}?title=${newTitle}&content=${newContent}`, {
        method: 'PUT',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const data = await response.json();
    if (data.reload === true) {
        console.log('reloading ...');
        window.location.reload(true);
    }
}

/**
 * @desc The post function inserts a new document,
 *       the content will be generated on the server.
 *       The response is a reload:true/false.
 * @param {object} event 
 * TODO: generating the new texts serverside and receive via fetch
 */
async function onPost(event) {
    event.preventDefault();

    console.log('ON POST');

    let id = event.target.dataset.id;
    let newTitle = 'That\'s the posted title.';
    let newContent = 'Posted fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.';
    const response = await fetch(`rest/post?title=${newTitle}&content=${newContent}`, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const data = await response.json();

    if (data.reload === true) {
        console.log('reloading ...');
        window.location.reload(true);
    }
}