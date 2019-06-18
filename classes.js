// - - - - - - - - - -
// classes or protoypes
// - - - - - - - - - -

!(function () {
  'use strict';

  class Shape {
    /**
     *
     * @param {string} [f=undefined]
     * @param {number} x
     * @param {number} y
     */
    constructor(f = undefined, x, y) {
      this._form = f;
      this._x = x;
      this._y = y;

      this.move(x, y);
    }

    /**
     * moves a shape
     * @param  {number} x
     * @param  {number} y
     * @return {none}
     */
    move(x, y) {
      this._x = x;
      this._y = y;
      console.log('-P (', x, ',', y, ')');
    }

    get x() {
      console.log('getter!');
      return this._x;
    }
    set x(x) {
      console.log('setter!');
      this._x = x;
    }

    get y() {
      return this._y;
    }
    set y(y) {
      this._y = y;
    }

    get form() {
      return this._form;
    }
    set form(f) {
      this._form = f;
    }
  }

  // - - - - - - - - - -
  // Inheritance
  // - - - - - - - - - -
  class Rectangle extends Shape {
    constructor(f = undefined, x, y, width, height) {
      // get the parent properties
      super(f, x, y);
      this._width = width;
      this._height = height;

      super.move(x, y);
    }

    move(x, y) {
      this._x = x;
      this._y = y;
      console.log('-C (', x, ',', y, ')');
    }

    get width() {
      return this._width;
    }
    set width(w) {
      this._width = w;
    }

    get height() {
      return this._height;
    }
    set height(h) {
      this._height = h;
    }
  }

  // - - - - - - - - - -
  // - - - - - - - - - -
  let square = new Shape('square', 10, 20);
  square.move(200, 400);
  square.x = 700; //   uses setter!
  square._x = 900; //  direct access!
  console.log(square.x); // uses getter

  let rectangle = new Rectangle('rectangle', 10, 20);
  console.log(rectangle);
}());









// - - - - - - - - - -