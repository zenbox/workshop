// Wait for DOM loading
window.onload = function () {

    const sendButton = document.querySelector('#sendButton');
    const messages = document.querySelector('#messages');
    const messageBox = document.querySelector('#messageBox');

    let ws;

    // Show messages within the message box and scroll to top
    function showMessage(message) {
        messages.textContent += `\n\n${message}`;
        messages.scrollTop = messages.scrollHeight;
        messageBox.value = '';
    }

    // Set the cursor into the input field
    function setCursor() {
        document.querySelector('input').focus();
    }

    function init() {

        // kill any existing socket connection, reset
        if (ws) {
            ws.onerror = ws.onopen = ws.onclose = null;
            ws.close();
        }

        // Establish a new socket connection
        ws = new WebSocket('ws://localhost:3001');
        // ows = new WebSocket('wss://otherhost:5503/ws');

        // Confirm open in console
        ws.onopen = () => {
            console.log('Connection opened!');
            setCursor();
        }

        // if there's a message, show it
        ws.onmessage = ({
            data
        }) => {
            showMessage(data)
        };

        // Closing
        ws.onclose = function () {
            ws = null;
        }
    }

    // Send messages on click
    sendButton.onclick = function (e) {
        e.preventDefault();

        if (!ws) {
            showMessage("No WebSocket connection :(");
            return;
        }

        ws.send(messageBox.value);
        showMessage(messageBox.value);

        setCursor();
    }

    // go
    init();
}