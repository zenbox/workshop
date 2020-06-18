// - - - - - - - - - -
setTheme(title = 'promises');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -

    // FETCH
    // fetch uses promises
    fetch('data/data-john.json')
        .then(returnJson)
        .then(showData)
        .catch(showError);

    function returnJson(response) {
        return response.json();
    }

    function showData(data) {
        log(`${data.who} ${data.what} ${data.where}`);
    }

    function showError(error) {
        log(error);
    }

    // FETCH SHORT
    // Short notation - ES6
    fetch('data/data-ann.json')
        .then(response => response.json())
        .then(data => log(`${data.who} ${data.what} ${data.where}`))
        .catch(error => error);
    // - - - - - - - - - -

    // PROMISE I
    // writing a promise
    let isMomHappy = false;

    const willIGetANewPhone = new Promise((resolve, reject) => {

        // State dependend
        if (isMomHappy) {

            const phone = {
                brand: 'Samsung',
                color: 'black'
            }

            resolve(phone);
        } else {

            const reason = new Error('Mom is not happy');

            reject(reason);
        }

    });

    // consume
    const showOff = function (phone) {
        const message = `Hey friend, i've a new ${phone.color} ${phone.brand}!`;

        return Promise.resolve(message);
    };

    const askMom = function () {
        willIGetANewPhone
            .then(showOff)
            .then(phone => log(phone))
            .catch(error => log(error.message));
    }

    askMom();


    // ASYNC/AWAIT (ES7)

    function who() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('Jane');
            }, 200);
        });
    }

    function what() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('lurks');
            }, 300);
        });
    }

    function where() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('in the shadows');
            }, 500);
        });
    }

    async function msg() {
        console.time('await');

        const a = await who();
        const b = await what();
        const c = await where();

        console.log(`${a} ${b} ${c}`);
        console.timeEnd('await');
    }

    msg(); // 🤡 lurks in the shadows <-- after 1 second
    // - - - - - - - - - -
}