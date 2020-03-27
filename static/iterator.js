// - - - - - - - - - -
setTheme(title = 'iterator');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -

    // Basic iterator
    let iterable = new Object();
    iterable[Symbol.iterator] = function* () {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
        yield 6;
        yield 7;
        yield 8;
    }

    console.log([...iterable]);

    // Iterator in a class
    // - - - - - - - - - - - - - - - - - -
    class Sequence {
        constructor(start = 0, end = Infinity, interval = 1) {
                this.start = start;
                this.end = end;
                this.interval = interval;
            }
            [Symbol.iterator]() {
                let counter = 0;
                let nextIndex = this.start;
                return {
                    next: () => {
                        if (nextIndex < this.end) {
                            let result = {
                                value: nextIndex,
                                done: false
                            }
                            nextIndex += this.interval;
                            counter++;
                            return result;
                        }
                        return {
                            value: counter,
                            done: true
                        };
                    }
                }
            }
    };

    let evenNumbers = new Sequence(2, 10, 2);

    log('sequence with even numbers');
    for (const num of evenNumbers) {
        console.log(num);
    }

    // - - - - - - - - - -
}