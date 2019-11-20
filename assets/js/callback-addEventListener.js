// Callback functions

function callback(evt) {
    console.log(evt.target);
}

function addEventListener(type, callback) {

    let event = {};

    event.timestamp = new Date();
    event.type = type;
    event.target = this;

    // ...
    callback(event);
}