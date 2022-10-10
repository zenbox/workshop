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
