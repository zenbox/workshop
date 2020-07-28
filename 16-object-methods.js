// - - - - - - - - - -
setTheme(title = 'object methods');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -

    // Object.assign()
    // - - - - - - - - - - - - - - - - - -
    // Assign to clone an object
    let widget = {
        color: 'red'
    };
    let clonedWidget = Object.assign({}, widget);

    Object.assign(clonedWidget, {
        color: 'orange'
    });

    log('clonedWidget');
    console.log(widget);
    console.log(clonedWidget);

    // Assign to merge objects
    let box = {
        height: 10,
        width: 20
    };

    let style = {
        color: 'Red',
        borderStyle: 'solid'
    };

    let styleBox = Object.assign({}, box, style);

    Object.assign(styleBox, {
        color: 'green'
    });

    log('styleBox');
    console.log(styleBox);

    // Object.is()
    // - - - - - - - - - - - - - - - - - -
    let amount = +0,
        volume = -0;

    log('comp:');
    log('===', volume === amount);
    log('is', Object.is(volume, amount));

    let quantity = NaN;
    log('===', (quantity === quantity));
    log('is', Object.is(quantity, quantity));

    // Computed property names
    // - - - - - - - - - - - - - - - - - -
    fn = (a, b) => `${a}${b}`;

    let obj = {
        foo: "bar",
        ["baz" + fn('_', 'getter')]: 42
    }
    log('computed property names');
    console.log(obj);

    // Method properties
    // - - - - - - - - - - - - - - - - - -
    let fns = {
        add(a, b) {
            return a + b;
        },
        subtract(a, b) {
            return a - b;
        },
        * do(a, b) {
            let result = 0;
            yield result + a + b;
        }
    }

    log('method properties');
    console.log(fns)

    log(fns.add(3, 4))
    log(fns.subtract(3, 4))
    console.log(fns.do(3, 4)
        .next())
    // - - - - - - - - - -
}