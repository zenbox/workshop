// Arrow functions
(args) => {
  return args;
};

(args) => args.toFixed(2);

obj.addEventListener("load", (event) => event.preventDefault());

// function () { }

console.log(this); // window

obj.addEventListener("load", function (event) {
  event.preventDefault();
  console.log(this); // event.target
});

// Classes

class MyClass {
  constructor(args) {
    this.init(args);
    this._value = args;
  }

  static count() {}

  init(num) {
    if (num === 42) return true;
  }

  set value(v) {
    this._value = v;
  }

  get value() {
    return this._value;
  }
}

class MyChildClass extends MyClass {
  constructor() {
    super();
  }
}

MyClass.count();

const myInstance = new MyClass(42);

console.log(myInstance.value); // 42

// Let vs. var
("use strict");

// var -> function scope
// let -> control scope
var c = undefined;

function doThis() {
  // hoisting (to hoist : nach oben ziehen)
  let a = 42;

  for (let i = 0; i < 8; i++) {
    console.log(i); // 0, 1, 2, ...
  }

  // function scope, 'cause ...
  var b = 108;

  var c = 512;

  console.log(i); // 8
  console.log(a);
}

doThis(); // 42

const PI = 3.1415982; // Primitive value!

PI = 0; // error!

const obj = {
  key: "value",
};

obj.newKey = "newValue"; // no error?
obj["newKey"] = "newValue";

obj = 42; // error!
