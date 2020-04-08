   window.addEventListener('load', function () {
       console.log('window loaded!')
   })

   // Short hand
   window.onload = function () {
       console.log('window loaded!')
   };

   var b = 108;

   // lambda expression
   // anonym functions
   // IIFE Pattern
   // Immediate Invoke Function Expression
   (function () {
       'use strict';
       // - - - - - - - - - -
       console.log('runs!');
       console.log(b);
       // - - - - - - - - - -
   }());

   // ES6+
   {
       let a = 108; // Control scope! for (let i=0;i<10;i++){}; console.log(i); // undefined!
       const PI = 3.14159;
       const STR = 'hello';

       console.log(a);

       // PI = 15.1;
       STR = 'new';
       const obj = {
           key: 'value'
       };

       obj.key_2 = 'new';
       console.log(obj);

       const http = require('http');

   };

   document.addEventListener('readystatechange', function () {
       console.log(document.readyState);
       if (document.readyState === 'complete') {
           console.log('my text: loaded!')
       }
   })


   $(document).ready(function () {
       'use strict';
       // - - - - - - - - - - -
       console.log('jQuery loaded!');
       // - - - - - - - - - - -
   });


   console.log('true 1?: ', true === true);
   console.log('true 2?: ', false === false);
   console.log('true 3?: ', '' === false); // A: false, U: true
   console.log('true 4?: ', ' ' === false); // A:false , U:false, M: true 