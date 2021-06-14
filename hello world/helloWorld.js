/** My first function ... */

function helloWorld(arg) {
    if (arg !== undefined) {
        console.log(arg);
    }
}


helloWorld('hallo Welt 2');

let i = 0;
setInterval(function () {
    helloWorld(i++)
}, 5000);