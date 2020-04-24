

let data = loadFromFirebase();
console.log(data.content); // undefined!



// Asyncron
let data = loadFromFirebase(message, function (response) { ... })

function loadFromFirebase(message, callback) { 
    message ...
    callback(message);
}


fetch('data.json')
    .then()  // positiv
    .catch() // negative
    .always()

    
$('#login-form').remove();
document.querySelector('#login-form').remove();