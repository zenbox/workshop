(function () {

    let worker = new Worker('task.js');

    worker.onerror = () => {};

    worker.onmessage = function (event) {
        console.log('runs ...');
        console.dir(event.data.message);
    };

    worker.onclose = () => {};

    setInterval(function () {
        worker.postMessage({
            "message": "hello worker"
        });

        worker.terminate();
    }, 3000);

}())