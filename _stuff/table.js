document.addEventListener("DOMContentLoaded", () => {
    // - - - - - - - - - -
    const table = document.querySelector("table");
    const cells = table.querySelectorAll("th, td");
    const cellsPerRow = table.rows[0].cells.length;
    let currentCellIndex = 0;

    table.setAttribute("tabindex", "0");

    table.addEventListener("focus", (event) => {
        setTableTabs();
    });

    table.addEventListener("blur", (event) => {
        // removeTableTabs();
    });

    setTableTabs = () => {
        cells.forEach((cell, index) => {
            cell.setAttribute("tabindex", "0");

            cell.addEventListener("keydown", (event) => {
                switch (event.key) {
                    case "ArrowRight":
                        currentCellIndex = index + 1;
                        cells[currentCellIndex].focus();
                        break;
                    case "ArrowLeft":
                        currentCellIndex = index - 1;
                        cells[currentCellIndex].focus();
                        break;
                    case "ArrowDown":
                        currentCellIndex = index + cellsPerRow;
                        cells[currentCellIndex].focus();
                        break;
                    case "ArrowUp":
                        currentCellIndex = index - cellsPerRow;
                        cells[currentCellIndex].focus();
                        break;
                    case "Escape":
                        table.focus();
                        break;
                }
            });
        });
    };

    // - - - - - - - - - -
});
