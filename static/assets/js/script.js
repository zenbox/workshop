// import default MyClass from "./MyClass.class.js";
// import { io } from "socket.io-client";

window.addEventListener("load", function () {
    "use strict";
    // - - - - - - - - - -
    // DECLARATION
    let buttons = document.querySelectorAll("button"),
        xhr = new XMLHttpRequest(),
        data = undefined;

    // METHODS
    function loadData(url) {
        console.log("load ...");

        // xhr.addEventListener("readystatechange", (event) =>
        //     onDataLoad(event, xhr)
        // );

        // xhr.open("GET", url);
        // xhr.send();

        // Using fetch as a promise
        // ES 2015 in browser
        fetch(url)
            // Fetch promise fulfilled!
            .then((string) => {
                // A second promise!
                return string.json(data);
            })
            // Second promise fulfilled!
            .then((data) => {
                console.log(data);
            })
            // Something is rejected
            .catch((error) => {
                console.log(error);
            });
    }

    function onDataLoad(event) {
        console.log("data ...");
        switch (xhr.readyState) {
            default:
            case 0:
                break;

            case 1:
                console.log("opened");
                break;
            case 2:
                console.log("sent");
                break;
            case 3:
                console.log("receive ...");
                break;
            case 4:
                console.log("received!");
                // console.dir(xhr);
                data = JSON.parse(xhr.response);
                console.log(data);
                break;
        }
    }

    function onClickButton(event) {
        console.log("click ...");

        loadData("/data/data.json");
    }

    async function onDeleteSheep(event) {
        // Avoid any browser execution
        event.preventDefault();

        let id = event.target.parentNode.dataset.id;

        await fetch(`/index/sheep/delete/${id}`, {
            method: "DELETE",
            cache: "no-cache",
            headers: { "Content-type": "application/json" },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.reload === true) window.location.reload(true);
            })
            .catch((error) => console.log(error));
    }

    // EVENT CONTROL
    buttons.forEach((button) => {
        button.addEventListener("click", (event) => onDeleteSheep(event));
    });
    loadData("/data/data.json");
    // - - - - - - - - - -
    // SOCKET CLIENT
    const socket = io();

    // let ws = new WebSocket("ws://localhost:3001")
    // - - - - - - - - - -
    socket.on("message", (data) => {
        console.log(data);
    });
    socket.on("adminmessage", (data) => {
        console.log(data);
    });
    socket.on("data", (data) => {
        let circle = document.querySelector("#data-1");
        circle.setAttribute("r", data);
    });
    // - - - - - - - - - -
    socket.on("connect", (event) => {
        socket.emit("message", "Hello server!");
    });
    socket.on("disconnect", (event) => {
        socket.emit("message", "Ciao!");
    });
    socket.on("reconnect", (event) => {
        socket.emit("message", "Hello server, here i am again!");
    });
    socket.on("ping", () => console.log("ping"));
    // - - - - - - - - - -
});
