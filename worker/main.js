(function () {

    let worker = new Worker('task.js'),
        statusDisplay,
        searchButton,
        displayList;

    window.onload = function () {
        statusDisplay = document.querySelector('#statusDisplay');
        searchButton = document.querySelector('#searchButton');
        displayList = document.querySelector('#prime-container');
    }

    doSearch = function () {
        let fromNumber = document.querySelector('#from').value,
            toNumber = document.querySelector('#to').value;


        worker.postMessage({
            "from": fromNumber,
            "to": toNumber
        });

        statusDisplay.innerHTML = `The worker is on the job (${fromNumber} , ${toNumber})`;

    }

    worker.onmessage = function (event) {
        console.dir(event.data);
        let messageType = event.data.messageType,
            message = event.data.data;


        switch (messageType) {
            case 'default':
                break;
            case 'primelist':
                statusDisplay.innerHTML = `The result are ready!`;

                displayList.innerHTML = message.join(', ');
                break;
            case 'Progress':
                statusDisplay.innerHTML = `${message} % done`;
                break;
        }
    };


    cancelSearch = function () {
        worker.terminate();
        worker = null;
        statusDisplay.innerHTML = `Search cancelled`;
    }

    worker.onerror = () => {
        console.log('something went wrong.')
    };

    worker.onclose = () => {
        console.log('worker closed!')
    };

}())