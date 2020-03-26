// - - - - - - - - - -
setTheme(title = 'reflections');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -

    var object = {
        prename: 'John',
        name: 'Doe',
        age: 25
    };

    log(Reflect.ownKeys(object));
    log(Reflect.get(object, 'age'));
    log(Reflect.has(object, 'name'));
    log(Reflect.set(object, 'age', 50));

    console.log(object);
    // - - - - - - - - - -
}