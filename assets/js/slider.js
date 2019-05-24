jQuery(document)
  .ready(function ($) {
    'use strict';
    // - - - - - - - - - -
    // DECLARATIONS
    // - - - - - - - - - -
    var
      // DOM elements
      sliderUl = jQuery('#slider ul'),
      slideCount = jQuery('#slider ul li')
      .length,
      slideWidth = jQuery('#slider ul li')
      .width(),
      slideHeight = jQuery('#slider ul li')
      .height(),
      sliderUlWidth = slideCount * slideWidth,

      // methods
      moveLeft = function () {},
      moveRight = function () {},
      main = function () {};

    // - - - - - - - - - -
    // METHODS
    // - - - - - - - - - -
    moveLeft = function () {
      sliderUl
        .animate({
          left: +slideWidth
        }, 200, function () {
          $('#slider ul li:last-child')
            .prependTo(sliderUl);
          sliderUl
            .css('left', '');
        });
    };

    moveRight = function () {
      sliderUl
        .animate({
          left: -slideWidth
        }, 200, function () {
          $('#slider ul li:first-child')
            .appendTo(sliderUl);
          sliderUl
            .css('left', '');
        });
    };

    main = function () {
      $('#slider')
        .css({
          width: slideWidth,
          height: slideHeight
        });

      sliderUl
        .css({
          width: sliderUlWidth,
          marginLeft: -slideWidth
        });

      $('#slider ul li:last-child')
        .prependTo(sliderUl);
    }

    // - - - - - - - - - - -
    // EVENT CONTROL
    // - - - - - - - - - - -
    $('#checkbox')
      .on('change', function () {
        setInterval(function () {
          moveRight();
        }, 3000);
      });

    $('a.control_prev')
      .on('click', function () {
        moveLeft();
      });

    $('a.control_next')
      .on('click', function () {
        moveRight();
      });

    // - - - - - - - - - - -
    // MAIN CONTROL
    // - - - - - - - - - - -
    $(function () {
      main();
    })

  });