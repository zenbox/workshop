// - - - - - - - - - -
setTheme(title = 'maps');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -

    let obj = {};
    console.dir(obj);

    let map = new Map();

    // Adding properties
    map.set('myKey', 'myValue');
    console.log(map);

    // iterable
    for (let [key, value] of map.entries()) {
        log(key, value);
    }

    // WeakMap
    // Map with objects only

    // - - - - - - - - - -
}