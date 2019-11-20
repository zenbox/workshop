!(function () {
'use strict';
// - - - - - - - - - -
// DECLARATION
// - - - - -


// - - - - -
// FUNCTIONS
// - - - - -
function _double(a) {
   var _a = a || 0;

   if (typeof (_a) !== 'number') return NaN;

   return _a + _a;
};

function _main() {
   // publish module and a function
   window.module = {} || window.module;
   window.module.double = _double;
}

// - - - - -
// CONTROL
// - - - - -
_main();
// - - - - - - - - - -
}())