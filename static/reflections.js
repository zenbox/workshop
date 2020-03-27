// - - - - - - - - - -
setTheme(title = 'reflections');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -
    {
        let obj = {
            a: 1
        }
        Object.defineProperty(obj, "b", {
            value: 2
        })
        obj[Symbol("c")] = 3

        log('');
        console.log(Reflect.ownKeys(obj))

    }

    let object = {
        prename: 'John',
        name: 'Doe',
        age: 25
    };

    log(Reflect.get(object, 'age')); // object.age
    log(Reflect.set(object, 'age', 50)); // object.age = 50;
    log(Reflect.has(object, 'name'));

    //                        (fn, this, valueArray)
    let result = Reflect.apply(Math.max, Math, [10, 20, 30]);
    log(result);
    // - - - - - - - - - -
}