let examples = {
    0: "objects and arrays",
    1: "sets and maps",
    2: "destructuring",
    3: "form",
    4: "other controls",
};
console.clear();

switch (examples[2]) {
    case "objects and arrays":
        // Multivalent data types
        // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
        // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

        let obj = {},
            arr = [];

        console.log(typeof obj, "(obj)");
        console.log(typeof arr, "(arr)");

        obj = {
            key: `value`,
            number: 42,
            bool: true,
            obj: {},
            arr: [],
            fn: function () {},
        };

        obj.number; // 42
        obj["number"]; // 42

        arr = [true, 2, "three"];
        arr[0]; // true

        // - - - - - - - - - -
        // ITERATION
        // Array
        // ! Do
        arr.forEach((value) => console.log(value));

        // Works for all Iterable objects
        // as Array, String, TypedArray, Map, Set, DOM collections and more
        for (const element of arr) {
            console.log(element);
        }

        // ! Don't
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }

        // Object
        // ! Do
        for (let key in obj) {
            console.log(obj[key]);
        }

    case "sets and maps":
        // Maps are as objects, but have an order and a size property
        let m = new Map(),
            k = "newKey";

        m.set("hello", 42);
        m.set(k, 34);

        // m.get(k) === 34
        // m.size === 2

        for (let [key, val] of m.entries()) {
            console.log(key + " = " + val.toString());
        }

        // Sets are arays with unique values
        let chars = new Set(["a", "b", "b", "c", "c", "c"]);
        console.log(chars);

        // chars.size; //  3
        // chars.add("d").add("e");
        // exist = chars.has("z");
        // chars.delete("e");
        // chars.clear();

        break;

    case "destructuring":
        // Objects
        let tuple = {
            a: 3,
            b: 7,
            c: 6,
        };

        let { a, b, c } = tuple;
        console.log(a, b, c);

        // Arrays
        const rgb = [255, 200, 0];
        const [red, green, blue] = rgb;
        const [, , blue_2] = rgb;

        console.log(red, green, blue);

        break;

    case "form":
        // ! Caution aginst mixed objects!
        let form = document.createElement("form");

        form.appendChild(document.createElement("input"));
        form.appendChild(document.createElement("button"));
        form.property_A = "Any value";
        form.property_B = "Any other value";

        console.log(form);
        console.log(form.length);
        break;

    case "other controls":
        // - - - - - - - - - -
        // OTHER CONTROLS
        let condition = true,
            key = "a",
            value = "a";

        while (!condition) {}

        if (condition) {
        } else if (otherCondition) {
        } else {
        }

        switch (key) {
            case value:
                break;

            default:
                break;
        }
        break;
}
