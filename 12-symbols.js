// - - - - - - - - - -
setTheme(title = 'symbols');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -

    // Basics
    let symbol = Symbol('sym1');
    log(typeof symbol);

    // Unique!
    let symbol2 = Symbol('sym1');

    const id = Symbol({a:1});

    console.log(id.a)


    log(symbol === symbol2);
    log(symbol == symbol2);

    // log
    console.log(symbol);
    log(symbol.toString());


    // Symbols as properties on objects
    {
        const SECRET = Symbol('secret');

        let data = {};
        data[SECRET] = 42;

        console.log(data);
        console.log(Object.getOwnPropertyNames(data));
        console.log(Object.getOwnPropertySymbols(data));

        // Cloning objects with symbols
        let cloneData = Object.assign({}, data);
        console.dir(cloneData);

        // SECRET has not being cloned!, It's unique.
        log((SECRET in data));
        log((SECRET in cloneData));

    }
    // primitives: call by value
    let a = 42;

    function fn(b) {
        b = 43;
        log(b);
        return b;
    }
    log(fn(a));
    log(a);

    let obj = {
        'key': 'value'
    };

    // primitives: call by reference
    function fno(o) {
        Object.assign(o, {
            'new': 'data'
        })
        console.log('inner', o);
        return o;
    }
    fno(obj);
    console.log('outer', obj);
    // - - - - - - - - - -
}