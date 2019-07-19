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

     const DEBUG = true;


     // object types in JS
     // [], {}, function () {}, null, undefined, String, Number, Boolean, Infinity, NaN ...

     // ES5
     //  let b = 'hello word'; //              typeof -> string
     //! DEPRECATED
     var b = new String('hello world'); // typeof -> object 

     // - - - -
     // old fashioned!
     // Classes -> Prototypes
     var Video = function (vt, l) {
         // private variables
         var a = 42;
         // public properties
         this.title = undefined;
         this.length = undefined;

         this.init(vt, l);

         //? using the new Video object within?
         //! probably not a good idea
         Video.prototype.stop = function () {
             if (DEBUG) console.log(this.title + ' stopped');
         }
     };

     // methods
     //! where the wolfpack runs
     Video.prototype.init = function (vt, l) {
         this.title = vt || undefined;
         this.length = l || undefined;
     }

     Video.prototype.play = function () {
         console.log('play ' + this.title);
     }

     // Child class of video
     var WebVideo = function (vt, l) {
         this.parent = Video.prototype;
         this.parent.init(vt, l);
     };

     WebVideo.prototype = new Video();


     // instatiate
     var myVideo = new Video('the video title', '30min');
     var myVideo2 = new Video('the video title', '30min');

     // use the object
     myVideo.play();

     // child class
     var myWebVideo = new WebVideo('the video title', '200min');


     console.log(myVideo);
     console.log(myWebVideo);

     // - - - -
     // OMNIS
     var Component = function () {
         this.title = 'component';
     };

     var ctrl_net_omnis_myComponent = new Component();


     // module pattern, iife pattern, constructor
     ctrl_net_omnis_myComponent.prototype = (function () {
         var PRIVATE
         var ctrl = {};

         ctrl.doSomething = function () {};

         return ctrl;
     })();
     // - - - - - - - - - -
 })()






 // - - - - - - - - - -
 let a = 42;
 (a) => {
     return a;
 }

 document.querySelector('body').addEventListener('load', (event) => {
     return event.target
 });