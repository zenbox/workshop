// - - - - - - - - - -
setTheme(title = 'generator');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -

    // Basic generator
    function* range(start, end, step) {

        while (start < end) {
            yield start // yield = Ertrag
            start += step;
        }
    }

    log('basic generator');
    for (let i of range(0, 20, 2)) {
        console.log(i);
    }

    // Basic generator with next()
    function* generatorFn() {
        console.log('Ann dances jive at the party');
        yield('while');
        // -> stop
        console.log('John drinks beer at home.');
        yield('The children are finally sleeping.');
    }

    const print = generatorFn();

    console.dir(print.next().value);
    console.dir(print.next().value);

    // Fibonacci
    let fibonacci = {
        *[Symbol.iterator]() {
            let previous = 0,
                current = 1
            for (;;) {
                [previous, current] = [current, previous + current];
                yield current;
                // -> stop
            }
        }
    }

    for (let n of fibonacci) {
        if (n > 1000)
            break
        console.log(n)
    }
    // - - - - - - - - - -
}