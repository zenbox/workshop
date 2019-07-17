// Mozilla:
function addEventListener(type, callback, isPropagationStopped) {
    let _event = {};

    _event.type = type;
    _event.timeStamp = new Date.now();
    _event.target = this;
    _event.which = getMouseButtonCode(); // getKeyboardCode()
    _event.shiftKey = true;

    // call the following function
    callback(_event);
}

let onSubmit = function (firlefanz) {
    console.dir(firlefanz);
    console.log(firlefanz.target);
}

// our code:
let form = document.querySelector('#form-login');
form.addEventListener('submit', onSubmit, false);



document.querySelector('#form-login').addEventListener('submit');