/** Tests
 *
 * @package Webapplication
 * @module Application
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2023-03-02
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2023 Michael Reichart, Cologne
 */

function add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return false;
    }

    let _a = a, // "3.1415" -> 3
        _b = b,
        _nResult = undefined;

    _nResult = _a + _b;

    return _nResult;
}

/**
 * Test execution
 */
QUnit.module("add", function () {
    QUnit.test("two numbers", function (assert) {
        let assertion = undefined,
            a = undefined,
            b = undefined;

        assertion = 3;
        a = 1;
        b = 2;
        assert.equal(add(a, b), assertion);

        assertion = 6;
        a = 2.333333333333;
        b = 3.666666666667;
        assert.equal(add(a, b), assertion);

        // assertion = 7;
        // a = +2123456789423456781897;
        // b = -2123456789423456781890;
        // assert.equal(add(a, b), assertion);
    });

    QUnit.test("numbers and strings", function (assert) {
        // General set up
        
        let assertion = undefined,
        a = undefined,
        b = undefined;
        
        assertion = false;
        a = "3";
        b = "3";
        assert.equal(add(a, b), assertion);
        
        assertion = false;
        a = 3;
        b = "3";
        assert.equal(add(a, b), assertion);
        
        // Triple A (AAA) pattern
        // Set up
        // ... Mockups, Spies
        // Assert
        assertion = false;
        // Arrange
        a = "3";
        b = 3;
        // Act
        assert.equal(add(a, b), assertion);
        // Tear down
        // ...
    });
});
