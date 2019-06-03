// Callback methods

// declaration
var fn = undefined;

// methods
fn = function () {
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

  // callback!
  _fn(_event);
}

// control (event-control)
button.addEventListener('click', fn);