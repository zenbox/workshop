// A Socket Client

// Connect to socket server
const socket = io();

socket.on('message', message => { 
    console.log(message);
});