// Callback functions
loadButton.addEventListener('click', function onLoadButton(event) {
    console.log(event);
});

function addEventListener(type, callback) {
    let
        _type = type || undefined,
        _fn = callbach || undefined,
        _evt = {};

    _evt.type = _type;
    _evt.timeStamp = Date();
    _evt.target = this;


    switch (type) {
        case 'click':
            break;
        case 'mousedown':
            break;
        case 'keydown':
            break;
        case 'load':
            break;
        default:
            break;
    }

    _fn(_evt);

}