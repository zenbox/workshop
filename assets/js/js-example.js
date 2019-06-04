// Callback methods

// declaration
var fn = undefined;

// methods
fn = function (e) {
  console.log('click!');
};

addEventListener = function (t, f) {
  var
    _type = t || undefined,
    _fn = f || undefined,
    _event = {};

  if (_type === undefined || _fn === undefined) return false;

  _event.type = _type;
  _event.timestamp = new Date();
  _event.which = 1;
  _event.target = this;

  // callback!
  _fn(_event);
}

// control (event-control)
button.addEventListener('click', fn);






function fn(arg) {
  var _arg = arg;
  console.log(_arg); // hallo
}



fn('hallo');

var jQuery;

function ($) {
  var _$ = $;
}(jQuery);









fn = function (args) {
  return true;
};
setTimeout(function () {
  fn(args);
}, 3000);