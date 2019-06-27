!(function () {
  'use strict';
  // - - - - - - - - - -
  // DECLARATION
  let main = undefined;

  // METHODS
  main = function () {

    let now = new Date();

    let weekDay = now.getDay()
    let calendarDay = now.getDate()
    let month = now.getMonth()
    let year = now.getFullYear()

    let months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', ];
    console.log(months[month]);

    console.log(now);
    console.log(weekDay);
    console.log(calendarDay);
    console.log(month);
    console.log(year);

  };

  // CONTROL
  window.addEventListener('load', main);
  // - - - - - - - - - -
}());