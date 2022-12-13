const data = [
    {
        "UUID": "{02397efwkhsf97423hefs}",
        "KanalName": "PMX_107 Ch4.4",
        "Kurzbezeichung": "",
        "Physikalische Einheit": " ",
        "Formatierung": "7:F3",
        "Kommentar": "",
        "ArtDesKanals": "",
    },
    {
        "UUID": "{023efa45z97efwkhss}",
        "KanalName": "PMX_142 Ch5.4",
        "Kurzbezeichung": "",
        "Physikalische Einheit": " ",
        "Formatierung": "7:F3",
        "Kommentar": "",
        "ArtDesKanals": "",
    },
    ["2022-12-12T12:00:00.1234Z", [0.2342345, 0.76435123]],
];

// let h1 = document.querySelector("h1");
// h1.innerHTML = "<em>Test</em>";

// Create an new element with some content
let h1 = document.createElement("h1"),
    context = document.querySelector("#item_4"),
    content = document.createTextNode(data[0].KanalName);

h1.appendChild(content);
context.appendChild(h1);

let canvas = document.querySelector("svg"),
    path = document.createElementNS("http://www.w3.org/2000/svg", "path");

path.setAttribute("d", "M 10,10 L 20,30");
path.classList.add("line-red");

canvas.appendChild(path);

// Classes in Javascript
class Chart {
    constructor(d) {
        this.data = d;
    }

    setHeadline(content) {}

    // set data() { }
    // get data() { }
}

let chart = new Chart(data);

chart.data;
chart.setHeadline("lalala");
