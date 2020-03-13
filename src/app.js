/** Building Components
 *
 * @desc Adding some components, like, paragraphs
 *       or images to the document. The idea is to
 *       encapsulate interface components.
 * @package webapp
 * @module example
 * @version 1.0.0
 * @since 2020/02/25
 * @author Michael <michael.reichart@gfu.net>
 * @copyright Michael Reichart 2020
 * @license MIT
 */

// ! NODEJS CODE
// import the components assets
import "./assets/scss/style.scss";
import Icon from "./assets/figures/brain.svg";
// ! /NODEJS CODE

// ! BROWSER CODE
/** A Paragraph Component
 *
 * @version v1.0.0
 * @since 2020-02-25
 * @param {type} _e element name for a DOM element
 * @param {type} _t text for a textnode
 * @returns {HTMLObject}
 */
function paragraph(_e, _t) {
  const node = document.createElement(_e);
  const text = document.createTextNode(_t);

  node.appendChild(text);
  node.classList.add("default");

  return node;
}

/** An Image As Component
 *
 * @version v1.0.0
 * @since 2020-02-25
 * @param none
 * @returns {void}
 */
function component() {
  const element = document.createElement("div");

  element.innerHTML = "Oh, an image component ... ";
  element.classList.add("withBackground");

  const myIcon = new Image();

  myIcon.src = Icon;
  myIcon.classList.add("medium");
  element.appendChild(myIcon);

  return element;
}

// Extend the DOM by this component
document.body.appendChild(component());
// - - - - - - - - - -

// Crazy and dirty way to just append stuff
// bääh!
document
  .querySelector("main>article")
  .appendChild(
    paragraph(
      "p",
      "Cool Javascript justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod."
    )
  );
