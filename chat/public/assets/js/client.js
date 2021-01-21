window.onload = () => {
    // A Socket Client
    const chatForm = document.querySelector('#chat-form');
    const chatMessages = document.querySelector('.chat-messages');

    // Get username and room from url
    const {
        username,
        room
    } = Qs.parse(location.search, {
        ignoreQueryPrefix: true
    })

    // Connect to socket server
    const socket = io();
    // - - - - - - - - - -
    // Join the chatroom
    socket.emit('joinRoom', {
        username,
        room
    });

    // Get room and user data
    socket.on('roomUsers', function ({
        userList,
        room
    }) {
        outputRoomName(room);
        outputUserList(userList);
    });

    // - - - - - - - - - -
    chatForm.addEventListener('submit', e => {
        e.preventDefault();

        // get the text
        let msg = e.target.elements.msg.value;
        msg = msg.trim();
        if (!msg) return false;

        // send to Server
        socket.emit('chatMessage', msg);

        // Clear the input
        e.target.elements.msg.value = '';
        e.target.elements.msg.focus();
    })


    socket.on('message', message => {
        // console.log(message);
        outputMessages(message);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    });


    function outputMessages(message) {
        const p1 = document.createElement('p');
        p1.classList.add('meta');
        p1.innerHTML = `USER ${message.time}`;

        const p2 = document.createElement('p');
        p2.classList.add('text');
        p2.innerHTML = message.text;

        const div = document.createElement('div');
        div.classList.add('message');
        div.appendChild(p1);
        div.appendChild(p2);

        chatMessages.appendChild(div);
    }

    function outputUserList(userList) {}

    function outputRoom(roomName) {}

    // - - - - - - - - - -
}