/* global console, window, document */
/**
 * A Simple jQuery App
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/05/20
 * @version v1.0.0
 * @copyright (c) 2018 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

// jQuery umbenennen
// var jq341 = jQuery.noConflict();

// jq341('button.continue')
//   .html('a lot of more steps ...');

// $ -> jQuery
// $('button.continue')
//   .html('next step ...');

// DOM Manipulation
jQuery('button.continue')
  .html('<b>more steps ...</b>');

// in Javascript
// ES 6+
document
  .querySelector('button.continue')
  .innerHTML = '<b>more JS steps ...</b>';

// ES5
var domCollection = document.getElementsByClassName('continue');

for (var i = 0; i < domCollection.length; i++) {
  domCollection[i].innerHTML = '<b>more JS steps 3 ...</b>';
}

// Event handling
jQuery('button.continue')
  .on('click', function (event) {
    jQuery(this)
      .hide();

    jQuery(this)
      .remove();

    this.hidden = true;
    this.style.display = 'none';

    console.dir(this);
  });



//