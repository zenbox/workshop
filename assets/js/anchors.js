/**
 * Clicking On Links
 */

var
  onClick = function () {},
  getContent = function () {};

onClick = function (event) {
  var url = event.target.href;
  event.preventDefault();
  getContent(url);
}

getContent = function (url) {
  var request = jQuery.ajax(url);
  request.done(function (response) {
    jQuery('main#content')
      .html(response);
  });
}

jQuery('a[href]')
  .on('click', onClick);