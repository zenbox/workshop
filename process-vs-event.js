// JS Process
let a = undefined;

let callback = function (i) {
    return 42 + i;
};

function doSomething(callback) {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }

    a = callback(i);

    console.log(a);
}

window.onload = doSomething();

button.addEventListener("click", (event) => {
    console.log(event.target);
});

// DECLARATION
let db = new Db(),
    dbHandle = undefined;

// METHODS
function handleResultset(resultset) {
    console.log(resultset);
}

function onconnect() {
    let resultset = dbHandle.query("SELECT * FROM table;");
    dbHandle.close();

    handleResultset(resultset);
}

// EVENT CONTROL
dbHandle = db.connect(credentials, onconnect);

async function doSomething(data) {
    await fetch(url)
        .then((string) => string.json())
        .then((data) => data)
        .catch();
}

// doSomething(){ }
