let request = $.ajax({
  url: 'content-1.html',
  method: 'post',
  data: $('form#form-login')
    .serialize(),
  dataFormat: 'html', // json, jsonp, xml, text


  beforeSend: function () {},
  : function () {},
})

function nextRequest() {}

request
  .done(function (response) {
    // do something else

    nextRequest();
  })
  .fail(function () {});

// shothand methods
dataObject = $.getJson(url, 'get');
data = $.get(url);
data = $.post(url);

$('main')
  .load('content-1.html');