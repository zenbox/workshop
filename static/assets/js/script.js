// import default MyClass from "./MyClass.class.js";

window.addEventListener("load", function () {
    "use strict";
    // - - - - - - - - - -
    // DECLARATION
    let button = document.querySelector("button"),
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
    // EVENT CONTROL
    button.addEventListener("click", (event) => onClickButton(event));
    loadData("/data/data.json");
    // - - - - - - - - - -
});
