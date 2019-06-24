let domObj = document.querySelector('button');

function fn(evt) {}


function addMyEventListener(type, callback) {
  let
    event = {},
    _ts = new Date(),
    _type = type || undefined,
    _callback = callback || undefined;

  if (
    _type === undefined ||
    typeof _type !== 'string'
  ) {
    console.log('false!');
    return false;
  }

  if (
    _callback === undefined
  ) {
    console.log('false!');
    return false;
  }


  _callback(event);
}


addMyEventListener('click', 0);









// - - - - - - - - - -