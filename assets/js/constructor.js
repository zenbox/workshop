 /**
  * Javasscript Constructor
  *
  * @package Webapplication
  * @module constructors
  * @author Michael <michael@zenbox.de>
  * @version v1.0.0
  * @since 2019/07/19
  * @license MIT License <https://opensource.org/licenses/MIT>
  * @copyright (c) 2019 Michael Reichart, Cologne
  */

 !(function () {
     'use strict';
     // - - - - - - - - - -

     // object types in JS
     // [], {}, function () {}, null, undefined, String, Number, Boolean, Infinity, NaN ...

     // ES5
     //  let b = 'hello word'; //              typeof -> string
     //! DEPRECATED
     var b = new String('hello world'); // typeof -> object 

     // old fashioned!
     // Classes -> Prototypes
     var Video = function (vt, l) {
         // private variables
         var a = 42;

         // public properties
         this.title = vt || undefined;
         this.length = l || undefined;

         Video.prototype.stop = function () {
             console.log(this.title + ' stopped');
         }
     };

     // methods
     Video.prototype.play = function () {
         console.log('play ' + this.title);
     }

     // instatiate
     var myVideo = new Video('the video title', '30min');
     myVideo.play();
     console.log(myVideo);




     // OMNIS
     var Component = function () {
         this.title = 'component';
     };

     var ctrl_net_omnis_myComponent = new Component();


     ctrl_net_omnis_myComponent.prototype = (function () {
         var PRIVATE
         var ctrl = {};

         ctrl.doSomething = function () {};

         return ctrl;
     })();


     console.log(ctrl_net_omnis_myComponent);




























     // - - - - - - - - - -
 })()