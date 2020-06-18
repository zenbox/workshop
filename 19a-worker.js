// - - - - - - - - - -
setTheme(title = 'worker');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -

    let worker = null,
        init = null,
        send = null,
        terminate = null,
        onMessage = null;

    init = function (callback) {
        worker = new Worker('19b-external-thread.js');
        console.log(worker);
        worker.addEventListener('message', onMessage);
        callback('ping');
    };

    send = function (data) {
        worker.postMessage(data);
    };

    terminate = function () {
        worker.terminate();
    };

    onMessage = function (event) {
        let data = event.data;

        console.log(data);

        data = JSON.parse(data);
        document.body.innerHTML += '<p>' + data.value.joke + '</p>';
    };

    init(send);
    // - - - - - - - - - -
}