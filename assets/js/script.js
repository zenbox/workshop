document.addEventListener("DOMContentLoaded", () => {
    // - - - - -
    const nav = document.getElementById("main-nav")

    const subs = nav.querySelectorAll("li")
    subs.forEach((sub) => {
        sub.addEventListener("click", (event) => {
            event.preventDefault()
            console.log("click")
            let li = event.target.parentElement

            li.setAttribute("aria-expanded", "true")
            li.querySelector("ul").classList.toggle("selected")
        })
    })

    const table = document.querySelector("table")
    const cells = table.querySelectorAll("th, td")
    const cellsPerRow = table.querySelectorAll("tr:first-child th").length
    let currentCellIndex = 0

    cells.forEach((cell, index) => {
        cell.setAttribute("tabindex", 0)
        cell.addEventListener("keydown", (event) => {
            console.log(event.key)
            switch (event.key) {
                case "ArrowDown":
                    if (index < cells.length - cellsPerRow) {
                        event.preventDefault()
                        currentCellIndex = index + cellsPerRow
                        cells[currentCellIndex].focus()
                    }
                    break
                case "ArrowUp":
                    if (index >= cellsPerRow) {
                        event.preventDefault()
                        currentCellIndex = index - cellsPerRow
                        cells[currentCellIndex].focus()
                    }
                    break
                case "ArrowLeft":
                    break
                case "ArrowRight":
                    break
                case "Escape":
                    cells[currentCellIndex].blur()
                    cells.forEach((cell) => {
                        cell.removeAttribute("tabindex")
                    })
            }
        })
    })

    // - - - - -
})
