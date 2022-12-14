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
        .then((data) => {
            // - - - - - - - - - -

            // Preg for lazy people
            let lines = data.split("\n");
            lines.forEach((line) => {
                // console.log(">", line);

                let values = line.split(" ");

                // console.log(Array.isArray(values))
                // console.log(values)

                let date = values.shift();
                let time = values.shift();

                console.log(date, time, values);

                for (let i = 0; i < values.length; i++) {
                    values[i] = parseFloat(values[i]);
                }

                console.log(">>>", values);
            });

            // - - - - - - - - - -
        })
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
getAsciiData("../../data/data.txt");

// EVENT CONTROL
button.addEventListener("click", (event) => {
    console.log(event);
    // Avoid any browser executions
    event.preventDefault();

    getData("../../data/data.json");
});
