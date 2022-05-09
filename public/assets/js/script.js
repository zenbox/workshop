
window.onload = () => { 
    const body = document.querySelector('body');
    body
        .appendChild(document.createElement('p'))
        .innerHTML = 'Hello World!';
}