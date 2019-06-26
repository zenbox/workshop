/* global console, window, document */
/**
 * The meaning of undefined in js
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/06/24
 * @version v1.0.0
 * @copyright (c) 2019 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

!(function () {
  'use strict';
  // - - - - - - - - - -
  // DECLARATION
  let
    main = undefined,
    fn = undefined;

  // METHODS
  fn = function (a) {
    let _args = a || undefined;
    console.log('a :', a, ', _args :', _args)
  }

  main = function () {
    // UNDEFINED
    // undefined means, there is var 'a' but no value assigned
    var a; // -> var a = undefined;
    // approve it
    console.log('\nUNDEFINED');
    console.log('value: ', a);
    console.log('typeof: ', typeof a);

    // NULL
    // null means, there is no var 'b'
    // So the next line is obviously weird,
    // but it works, because in JS everything is an object,
    // even the value null
    var b = null;
    // approve it
    console.log('\nNULL');
    console.log('value: ', b);
    console.log('typeof: ', typeof b);

    // FALSY VALUES
    // falsy values are comparison values with an undefined meaning,
    // like false, 0, '', undefined and null
    var c = false;
    // approve it
    console.log('\nFALSE');
    console.log('value: ', c);
    console.log('typeof: ', typeof c);

    // ZERO
    // The value zero
    var d = 0;
    // approve it
    console.log('\n0 (zero)');
    console.log('value: ', d);
    console.log('typeof: ', typeof d);

    // EMPTY STRING
    var e = '';
    // approve it
    console.log('\nEMPTY STRING');
    console.log('value: ', e);
    console.log('typeof: ', typeof e);

    console.log('\nCOMPARISONS:')
    console.log('\'\' == \'\': ', '' == '', '         <-- ok');
    console.log('\'\' == 0: ', '' == 0, '          <-- hm?');
    console.log('\'\' == false: ', '' == false, '      <-- hm?');
    console.log('0 == false: ', 0 == false, '       <-- still the same hm');
    console.log('\'0\' == 0: ', '0' == 0, '         <-- stupid, but it is a value comparison');

    console.log('\n- - - - - - - - - - - - - - - - -');
    console.log('\nnull == undefined:', null == undefined, ' <-- uhoh!');
    console.log('\n- - - - - - - - - - - - - - - - -');

    console.log('\n')
    console.log('undefined == \'\':', undefined == '');
    console.log('null == \'\':', null == '');
    console.log('undefined == false:', undefined == false);
    console.log('null == false:', null == false);

    console.log('\n')
    console.log('undefined == undefined:', undefined == undefined);
    console.log('null == null:', null == null);


    if (typeof undefined == 'undefined') console.log('typeof undefined == \'undefined\' is true')
    else console.log('typeof null == \'undefined\' is false')
    if (typeof null == 'undefined') console.log('typeof null == \'undefined\ is undefined')

    console.log('\nEach object type instanciates a new object:');
    console.log('{} == {}:', {} == {});
    console.log('[] == []: ', [] == []);
    console.log('function () {} == function () {}', function () {} == function () {});

    console.log('\nbut:');
    console.log('null == null: ', null == null);
    console.log('undefined == undefined: ', undefined == undefined);
    // finish
    console.log('- - - - - - - - - -');
    console.log('undefined as default value ?');
    console.log('fn = function (a) {');
    console.log(' let _args = a || undefined;');
    console.log('}');
    console.log('- - - - - - - - - -');

    fn(123);
    fn('abc');
    fn(true);
    fn(Infinity);

    fn({});
    fn([]);
    fn(function () {});

    console.log('\nbut:');
    fn();
    fn(0);
    fn(false);
    fn('');
    fn(null);
    fn(undefined);
    fn(NaN);

    console.log('- - - - - - - - - -');
  };

  // CONTROL
  window.addEventListener('load', main);
  // - - - - - - - - - -
}());