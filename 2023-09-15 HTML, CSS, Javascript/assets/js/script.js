// - - - - -
// DOM Manipulation
// - - - - -
// 1. DOM context

// const context = document.getElementById("visual");
// const context = document.querySelector("#visual g");

// // 2. New element
// let bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");

// // <rect x="" y="" width="" height=""  >
// bar.setAttribute("x", 10);
// bar.setAttribute("y", 10);
// bar.setAttribute("width", 100);
// bar.setAttribute("height", 300);

// // 3. Append to DOM context
// context.appendChild(bar);

const socket = io("http://localhost:3000", {});

socket.on("socket message", (message) => {
    console.log(message);
});
76m
const border = 2;
const width = 480 - border;
const height = 480;
const data = [200, 100, 300, 400, 300];

data.forEach((d, i) => {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", border + i * (width / data.length));
    rect.setAttribute("y", height - d);
    rect.setAttribute("width", width / data.length - border);
    rect.setAttribute("height", d);
    document.querySelector("#visual g").appendChild(rect);
});
socket.on("visual data", (data) => {
    console.log(data);
    data.forEach((d, i) => {
        const rect = document.querySelectorAll("#visual g rect")[i];
        rect.setAttribute("y", height - d);
        rect.setAttribute("height", d);
    });
});

// - - - - -
// Events
// - - - - -
// Declaration, initalisation
const login = document.querySelector("#login");

// Methods, event handler
function getData(target) {
    let data = { email: "mail@gfu.net", password: "geheim" };
    return data;
}

async function sendData(data) {
    let url = "http://localhost:3000/login/";
    const options = {
        method: "POST",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };

    await fetch(url, options)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {
            console.error(error);
            // buildMessage()
            // deleteLogin()
        })
        .finally(() => {
            console.log("finally!");
        });
}

const onloginSubmit = function (event) {
    event.preventDefault();
    let data = getData(event.target);
    sendData(data);
};
const onloginReset = function (event) {};

// Process, event control
login.addEventListener("submit", onloginSubmit);
login.addEventListener("reset", onloginReset);

// function addEventListener(type, callback) {

//     const event = {};
//     event.type = type;
//     event.timeStamp = new Date();
//     ...

//     callback(event);
//  }

// - - - - -
// Data Handling
// - - - - -