// - - - - -
// Socket.io
// - - - - -
const socket = io("http://localhost:3000", {});

socket.on("socket message", (msg) => {
    console.log(
        `%c${msg}`,
        "color: white;  background: green; font-size: 0.75rem;"
    );
});
