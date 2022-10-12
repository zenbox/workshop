/** A simple socket example
 *
 * @package Webapplication
 * @module cloent
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2022-10-11
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2022 Michael Reichart, Cologne
 */

const socket = io()

// Socket events
socket.on("connect", (id) => {
    console.log(socket.id)
})
socket.on("disconnect", () => {
    console.log("disconnected.")
})
socket.on("ping", (d) => {
    console.log("ping ...")
})
// other events: error, reconnect_attempt, reconnect_failed, reconnect_error

socket.on("broadcastMessage", (data) => {
    console.log(data)

    socket.emit("clientMessage", "Hello Server, nice to meet you.")
})

socket.on("clientMessage", (data) => {
    console.log(data)
    socket.emit("clientMessage", "Hello Server, nice to meet you.")
})

// Ui for sheeps
// Catch buttons
let buttons = document.querySelectorAll("button")

async function onDeleteSheep(event) {
    event.preventDefault()

    let id = event.target.parentNode.dataset.id

    let response = await fetch(`/sheeps/delete/${id}`, {
        method: "DELETE",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
        },
    })

    if (!response.ok) {
    }

    // ok ....
    let data = await response.json()
    if (data.reload === true) window.location.reload(true)
}

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        onDeleteSheep(event)
    })
})
