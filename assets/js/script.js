/** PROCESS */
import Chart from "./Chart.class.js";

// DECLARATION, INIT
let canvas = document.querySelector("#line-chart"),
    button = document.querySelector("#line-chart-update");

// METHODS
function getAsciiData(filename) {
    fetch(filename)
        .then((response) => {
            if (response.status === 200) {
                return response.text();
            }
        })
        .then()
        .catch();
}

function getData(filename) {
    // Load a file via fetch
    // fetch is a promise
    fetch(filename)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            }
        })
        .then((data) => {
            // - - - - - - - - - -
            let chart = new Chart(data);
            chart.removePath(canvas);
            chart.drawAsPath(canvas);
            // - - - - - - - - - -
        })
        .catch((error) => {
            console.log(error);
        });
}

// CONTROL
// EVENT CONTROL
button.addEventListener("click", (event) => {
    console.log(event);
    // Avoid any browser executions
    event.preventDefault();

    getData("../../data/data.json");
});
