/** Socket IO Client */

window.onload = () => {
    // - - - - - - - - - -

    let socket = io(); // new WebSocket(wss://localhost:3000);

    socket.emit('clientMessage', 'Hello server!');

    // Recevice a message from the server
    socket.on('serverMessage', (data) => {
        console.log(data);
    });

    socket.on('broadcastMessage', (data) => {
        console.log(data);
    });
    // - - - - - - - - - -
}