!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){e.exports=n.p+"49f183e62bd71be040fbf955996cd968.svg"},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);document.body.appendChild(function(){const e=document.createElement("div");e.innerHTML="Oh, an image component ... ",e.classList.add("withBackground");const t=new Image;return t.src=o.a,t.classList.add("medium"),e.appendChild(t),e}()),document.querySelector("main>article").appendChild(
/** Building Components
 *
 * @desc Adding some components, like, paragraphs 
 *       or images to the document. The idea is to
 *       encapsulate interface components.
 * @package webapp
 * @module example
 * @version 1.0.0
 * @since 2020/02/25
 * @author Michael <michael.reichart@gfu.net>
 * @copyright Michael Reichart 2020
 * @license MIT
 */
function(e,t){const n=document.createElement(e),r=document.createTextNode(t);return n.appendChild(r),n.classList.add("default"),n}("p","Crazy, dirty cool Javascript justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod."))}]);