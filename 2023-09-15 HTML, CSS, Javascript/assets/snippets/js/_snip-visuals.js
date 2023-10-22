// - - - - -
// Visual
// - - - - -
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
