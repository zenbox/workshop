// Tastatursteuerung für eine Tabelle
// - Pfeiltasten: Navigation
// - Tab: Navigation
// - Shift + Tab: Navigation
// - ESC: Navigation verlassen
// - ENTER: Auswählen

document.addEventListener("DOMContentLoaded", () => {
    // - - - - -

    const table = document.querySelector("table");
    const cells = table.querySelectorAll("tbody td, th");
    const cellsPerRow = table.querySelectorAll("tr:first-child th").length;
    let currentCellIndex = 0;

    cells.forEach((cell, index) => {
        cell.setAttribute("tabindex", "0"); // Add tabindex to make cells focusable

        cell.addEventListener("keydown", (event) => {
            switch (event.key) {
                case "ArrowDown":
                    if (index < cells.length - cellsPerRow) {
                        event.preventDefault();
                        cells[currentCellIndex].blur();
                        currentCellIndex = index + cellsPerRow;
                        cells[currentCellIndex].focus();
                    }
                    break;
                case "ArrowUp":
                    if (index >= cellsPerRow) {
                        event.preventDefault();
                        cells[currentCellIndex].blur();
                        currentCellIndex = index - cellsPerRow;
                        cells[currentCellIndex].focus();
                    }
                    break;
                case "Tab":
                case "ArrowRight":
                case "ArrowLeft":
                    event.preventDefault();
                    if (event.shiftKey || event.key === "ArrowLeft") {
                        currentCellIndex =
                            (currentCellIndex - 1 + cells.length) %
                            cells.length;
                    } else {
                        currentCellIndex = (index + 1) % cells.length;
                    }
                    cells[currentCellIndex].focus();
                    break;
                case "Escape":
                    cells[currentCellIndex].blur();
                    cells.forEach((cell) => cell.removeAttribute("tabindex"));
                    const nextElement = table.nextElementSibling;
                    if (nextElement) {
                        nextElement.focus();
                    }
                    break;
            }
        });
    });

    // - - - - -
});
