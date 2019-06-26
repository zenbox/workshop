(function () {
  'use strict';
  // - - - - - - - - - -

  // define the class
  let _fn = function () {
    this.version = '0.1';
    this.os = 'MacOS X';
    this.browser = 'Chrome';
  };


  _fn.prototype.setVersion = function (version) {
    this.version = version;
    return this;
  };

  _fn.prototype.setOs = function (os) {
    this.os = os;
    return this;
  };

  _fn.prototype.setBrowser = function (browser) {
    this.browser = browser;
    return this;
  };

  _fn.prototype.save = function () {
    console.log(
      'saving ' + this.version + ', on ' +
      this.os + ' with ' + this.browser + '.'
    );
    return this;
  };
  // - - - - - - - - - -
  let fn = new _fn();

  fn.setVersion('1');
  fn.setOs('MacOS XI');
  fn.setBrowser('Chrome Xtra');
  fn.save();

  fn
    .setVersion('2')
    .setOs('MacOS XII')
    .setBrowser('Chrome Xtra Large')
    .save();
  // - - - - - - - - - -
})();









!(function () {
  'use strict';
  // - - - - - - - - - -
  // DECLARATION
  let main = undefined;

  function a() {
    let j = 0;
    console.timeStamp();
    for (let i = 0; i < 100000000; i++) {
      j = Math.random() * 10 + Math.random() * 10;
    }
    console.log('j: ', j);
    console.timeEnd();
  }

  function b() {
    console.log('b');
  }

  // METHODS
  main = function () {

    a();
    b();

  };

  // CONTROL
  window.addEventListener('load', main);
  // - - - - - - - - - -
}());