// - - - - - - - - - -
setTheme(title = 'sets');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -

    let setObject = new Set(['a', 'b', 'c']);

    console.log(setObject);
    console.log(setObject.has('a'));

    let setObject2 = new Set(['a', 'b', 'c', 'c']);
    console.log(setObject);
    log(setObject.size);

    log(setObject.delete('b'));
    console.log(setObject);

    log(setObject.add('d'));
    console.log(setObject);

    log(setObject.clear());
    console.log(setObject);

    setObject
        .add('a')
        .add('b')
        .add('c');

    console.log(setObject);

    // Set is iterable
    for (let value of setObject)
        console.log(value);

    // for (let i = 0; i < setObject.size; i++) { 
    //     console.log(setObject[i]);
    // }

    // WeakSet
    let computer = {
        type: 'laptop'
    };
    let server = {
        type: 'server'
    };

    let eqipment = new WeakSet([computer, server, computer]);

    if (eqipment.has(server)) {
        log('has a server')
    }

    console.log(eqipment)
    // - - - - - - - - - -
}