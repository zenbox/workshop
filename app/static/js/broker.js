window.onload = () => {
    // - - - - - - - - - -
    // Socket and stuff
    // - - - - - - - - - -
    let socket = io();

    let form = document.getElementById('form');
    let input = document.getElementById('input');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (input.value) {
            socket.emit('broker', input.value);
            input.value = '';
        }
    });

    console.log('b r o k e r');

    // - - - - - - - - - -
    // Socket events
    // - - - - - - - - - -
    socket.on('connect', () => console.log('broker connect'))
    socket.on('disconnect', () => console.log('broker disconnect'))
    socket.on('reconnect', () => console.log('broker reconnect'))
    socket.on('reconnect_attempt', () => console.log('broker reconnect_attempt'))
    socket.on('reconnect_error', () => console.log('broker reconnect_error'))
    socket.on('reconnect_failed', () => console.log('broker reconnect_failed'))
    socket.on('ping', () => console.log('broker ping'))
    socket.on('error', () => console.log('broker error'))

    // - - - - - - - - - -
    // Broker message engine
    // - - - - - - - - - -
    socket.on('broker', function (msg) {
        var item = document.createElement('li');
        item.textContent = msg;
        messages.appendChild(item);
        window.scrollTo(0, document.body.scrollHeight);
    });
}