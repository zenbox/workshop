/**
 * Immediate Invoked Function Expression
 * IIFE - Pattern
 * ( function () { ... } )()
 * 
 * alternate:
 * (function (){}())
 * 
 * Module-Pattern
 * var myModule = ( function () {
 *      var obj = {};
 *      ...
 *      return obj;
 * })()
 */
(function () {
    // - - - - - - - - - -
    var a = window.myModule.naveed;

    // new nodes
    var newNode = document
        .createElement('p');

    var newText = document
        .createTextNode('Ipsum dolor sit amet consectetur.');

    newNode
        .appendChild(newText);

    document
        .querySelector('body')
        .appendChild(newNode);

    // - - - - - - - - - -
})();