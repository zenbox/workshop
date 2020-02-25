/**
 * DOM Manipulation via JS
 *
 * @package webapp
 * @module example
 * @version 1.0.0
 * @since 1.0.0
 * @author Michael <michael.reichart@gfu.net>
 * @copyright Michael Reichart 2019
 * @license MIT
 */

import "./assets/scss/style.scss";
import Icon from "./assets/figures/skull.svg";

/**
 * This is a function
 *
 * @param {string} e a sample element tagname
 * @param {string} t a sample text
 * @return {object}
 */
function paragraph(_e, _t) {
  const node = document.createElement(_e);
  const text = document.createTextNode(_t);

  node.appendChild(text);
  node.classList.add("default");

  return node;
}

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = 'Hello webpack ';
  element.classList.add('withBackground');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.classList.add('medium');

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());

document
  .querySelector("main>article")
  .appendChild(
    paragraph(
      "p",
      "Cras nice and crazy beautiful Javascript justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod."
    )
  );