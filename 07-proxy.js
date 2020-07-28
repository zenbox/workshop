// - - - - - - - - - -
setTheme(title = 'proxy');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -

    let object = {
        a: 42,
        count: 0,
        note: 'cool'
    };

    let handler = {
        get: (object, property) => {
            switch (property) {
                case 'a':
                    return object[property] * 2;
                    break;
                case 'count':
                    return object[property]++;
                    break;
                default:
                    // unchanged:
                    return object[property];
            }
        }
    };

    let proxy = new Proxy(object, handler);

    log(object.a);
    log(proxy.a);

    let result = proxy.count + proxy.a;
    log(result);

    log(proxy.count);
    log(proxy.count);
    log(proxy.count);
    log(proxy.count);

    log(proxy.note);

    { // Example to hide properties
        let object = {
            prename: 'John',
            name: 'Doe',
            _private: 'Ann'
        }

        const hide = (object, prefix = '_') => new Proxy(object, {

            // don't show _properties! Mostly used as private props
            has: (obj, prop) => (!prop.startsWith(prefix) && prop in obj),

            ownKeys: (obj) => Reflect.ownKeys(obj)
                .filter(prop => (typeof prop !== "string" || !prop.startsWith(prefix))),

            get: (obj, prop, rec) => (prop in rec) ? obj[prop] : undefined

        })

        let userData = hide(object);

        // Try to show private properties
        console.log(userData._private); // undefined
        console.log(('_private' in userData)); // false

        // Show all properties
        console.log(Object.keys(userData)) // ['firstName', 'mediumHandle']
    }
    // - - - - - - - - - -
}