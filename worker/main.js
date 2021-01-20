(function () {

    let worker = new Worker('task.js');

    worker.onerror = () => {console.log('something went wrong.')};

    worker.onmessage = function (event) {
        console.log('worker started ...');
        console.dir(event.data.message);
    };

    worker.onclose = () => { console.log('worker closed!')};

        worker.postMessage({
            "message": "hello worker"
        });

        worker.terminate();

}())