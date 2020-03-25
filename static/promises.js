// - - - - - - - - - -
setTheme(title = 'promises');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -

    // fetch uses promises
    fetch('assets/data/data-john.json')
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

    // Short notation - ES6
    fetch('assets/data/data-ann.json')
        .then(response => response.json())
        .then(data => log(`${data.who} ${data.what} ${data.where}`))
        .catch(error => error);
    // - - - - - - - - - -


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

    // - - - - - - - - - -
}