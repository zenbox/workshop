// - - - - - - - - - -
setTheme(title = 'sets');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -

    let setObject = new Set(['a', 'b', 'c']);



    console.log(setObject);
    console.log('has', setObject.has('a'));

    let setObject2 = new Set(['a', 'b', 'c', 'c']);
    console.log(setObject2);
    log(setObject2.size);

    let combinedSet = new Set([setObject, setObject2]);
    console.log('combined', combinedSet);

    // for i++ -> Array
    // for in  -> Objects
    // .foreach()

    //  For all iterables
    // arrays, sets, maps
    for (let value of setObject) {
        console.log(value);
    }


    let o1 = {
        a: 1
    };
    let o2 = o1;
    let setObject3 = new Set(['a', 'b', 1, '1', true, o1, o2]);
    console.log('3:', setObject3);
    log(setObject3.size);

    log('delete', setObject.delete('b'));
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

    // server = null;
    eqipment.delete(computer);

    if (eqipment.has(server)) {
        log('has a server')
    } else {
        log('no server');
    }

    console.log(eqipment)
    // - - - - - - - - - -
}