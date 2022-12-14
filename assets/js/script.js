/** PROCESS */
import Chart from "./Chart.class.js";

// DECLARATION, INIT
let canvas = document.querySelector("#line-chart");

// METHODS

// CONTROL
// Load a file via fetch
// fetch is a promise
fetch("../../data/data.json")
    .then((response) => {
        console.dir(response);
        if (response.status === 200) {
            return response.json();
        }
    })
    .then((data) => {
        // - - - - - - - - - -
        let chart = new Chart(data);

        chart.drawAsPath(canvas);

        // - - - - - - - - - -
    })
    .catch((error) => {
        console.log(error);
    });
