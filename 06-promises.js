// - - - - - - - - - -
setTheme(title = 'promises');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -

    // AJAX
    let request = new XMLHttpRequest();

    request.addEventListener('readystatechange', (event) => {
        switch (request.readyState) {
            case 0:
                console.log('no request');
                break;
            case 1:
                console.log('opened');
                break;
            case 2:
                console.log('sent');
                break;
            case 3:
                console.log('response head + body 1');
                break;
            case 4:
                console.log(request.status);
                console.log('response body n + end');
                break;
        }

    })

    request.open('GET', 'data/data-john.json');
    request.send();


    // FETCH
    fetch('data/data-john.json')
        .then(response => response.json()) // success!
        .then(execData)
        .catch((error) => {
            console.log(error)
        }) // error!

    function execData(data) { 
        console.log(data);
        console.log(`${data.who} ${data.what} ${data.where}`)
    }
    // - - - - - - - - - -
    // Writing a promise
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
            }, 1000);
        });
    }

    function what() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('lurks');
            }, 100);
        });
    }

    function where() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('in the shadows');
            }, 100);
        });
    }

    async function msg() {
        console.time('await');

        const a = await who();
        const b = await what();
        const c = await where();

        console.log(`${a} ${b} ${c}`);
        console.timeEnd('await');
        console.timeEnd('await');
    }

    msg(); // 🤡 lurks in the shadows <-- after 1 second


    // Async promises 
    console.time('all');
    Promise
        .all([who(), what(), where()])
        .then(() => {
            console.timeEnd('all');
        })
        .catch((error) => {
            error
        })
    // - - - - - - - - - -
}