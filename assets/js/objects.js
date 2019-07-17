// enhanced value types
// -> objects

let
    array = [true, "zwei", 3],
    object = {
        "key": "value",
        "boolean": true,
        "number": 42,
        "my-key": "strange",
        "path": "c:\\path\\to\\file.ext",
        "fn": function () {},
        "array": [1, 2, 3],
        "object": {
            "key": "value"
        }
    };

console.clear();
console.log(array[0]);

for (let i = 0, len = array.length; i < len; i += 1) {
    console.log(array[i]);
}


console.log(object.key);
console.log(object.boolean);
console.log(object.object);
console.log(object['my-key']);

let key = 'number';
console.log(object[key]);

for (let key in object) {
    console.log(key, ':', object[key]);
}

console.log(array.length);
console.log(object.length);

console.clear();

let form = document.querySelector('form');
console.log(form.length)

for (let i = 0; i < form.length; i += 1) {
    console.dir(form[i].value);
}



// FUNCTIONS
console.clear();

let log = function (m) {
    console.log(m);
};

console.log(typeof log);

console.log(log);
console.log(log('hey'));
log('hello world.')


// Eventlistener
window.addEventListener('load', log)

function addEventListener(type, fn) {
    let
        event = {};

    event.type = type;
    event.timeStamp = Date.now();
















    fn(event);

}



// console.log(typeof array);
// console.log(typeof object);