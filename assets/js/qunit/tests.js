/** Tests for ...
 *
 * @package Webapplication
 * @module tests
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2020-03-12
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2020 Michael Reichart, Cologne
 */
!(function () {
    'use strict';
    //- - - - - - - - - -
    // Function
    /** Add two number
     *
     * @version v1.0.0
     * @since 2020-03-12
     * @param {number} a
     * @param {number} b
     * @returns {number, boolean}
     */
    function add(a = 0, b = 0) {
        let value;

        a = parseInt(a);
        b = parseInt(b);

        value = a + b;

        // FIXME float point overflow!
        // todo ...

        return value;
    }

    // - - - - - - - - - -
    // Value testing
    // - - - - - - - - - -
    QUnit.module('Test Calc.add()', function () { // Test group

        // Building a test serie
        QUnit.test('test_Calc.add()_isResult7', function (assert) {
            // Arrange (set up)
            let a, b, expected, result;

            a = 3, b = 4;
            expected = 7;

            // Act
            result = add(a, b);

            // Asserts
            assert.ok(result === expected, `${a}+${b}===${expected}`);
            assert.equal(result, expected, `${a}+${b}===${expected}`);
            assert.strictEqual(result, expected, `${a}+${b}===${expected}`);

            // Tear down
            a = null, b = null, expected = null, result = null;
            // - - - - - - - - - - -

        });

        // - - - - - - - - - -
        // not value testing
        // - - - - - - - - - -
        QUnit.test('test_Calc.add()_isNotResult7', function (assert) {
            // Arrange (set up)
            let a, b, expected, result;

            a = 3, b = 5;
            expected = 7;

            // Act
            result = add(a, b);

            // Assert
            assert.ok(result !== expected, `${a}+${b}!==${expected}`);

            // Tear down
            a = null, b = null, expected = null, result = null;
        });


        // - - - - - - - - - -
        // Number type testing
        // - - - - - - - - - -
        QUnit.test('test_Calc.add()_isNumber', function (assert) {
            // Arrange (set up)
            let a, b, expected, result;

            a = 3, b = 4;
            expected = 'number';

            // Act
            result = typeof add(a, b);

            // Assert
            assert.ok(result === expected, `typeof add(${a}+${b}) === '${expected}'`);

            // Tear down
            a = null, b = null, expected = null, result = null;
        })

        // - - - - - - - - - -
        // String conversion testing
        // - - - - - - - - - -
        // Test for number type against string input
        // - - - - - - - - - -
        QUnit.test('test_Calc.add()_isNumberConversion', function (assert) {
            // Arrange
            let a, b, expected, result;

            a = 3, b = "4";
            expected = 'number';

            // Act
            result = typeof add(a, b);

            // Assert
            assert.ok(result === expected, `typeof add(${a}+${b}) === '${expected}'`);

            // Tear down
            a = null, b = null, expected = null, result = null;
        });
    });
    //- - - - - - - - - -
}());