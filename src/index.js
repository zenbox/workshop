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

import "./sass/style.scss";

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

document
  .querySelector("main>article")
  .appendChild(
    paragraph(
      "p",
      "Cras nice and crazy Javascript justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod."
    )
  );