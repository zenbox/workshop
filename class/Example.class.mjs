export default class Example {
    constructor(flag = false) {
        this.flag = flag; // public property
    }

    set _flag(flag) {
        console.log("flag setter");
        this.flag = flag;
    }

    get _flag() {
        console.log("flag getter");
        return this.flag;
    }

    printf(text = "") {
        try {
            // - - - - - - - - - -
            if (text !== undefined) console.log(text);
            // - - - - - - - - - -
        } catch (error) {
            console.log(error.message);
        }
    }
}

class Child extends Example {}

// Instantiation
const example = new Example();
console.log(example.flag);
example.printf("Hello World");

example.flag = true;
console.log(example.flag);
