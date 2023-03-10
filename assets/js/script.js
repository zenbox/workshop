/** Accordion Script and more
 *
 * @package Webapplication
 * @module Web UI
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2023-03-10
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2023 Michael Reichart, Cologne
 */

// DECLARATION
let buttons = document.querySelectorAll(".mD-accordion button");

// METHODS
function onAccordionButtonClick(event) {
    console.log(event.target);
    buttons.forEach((button) => button.classList.remove("active"));
    event.target.classList.add("active");
}

// CONTROL (EVENT CONTROL)
buttons.forEach((button) =>
    button.addEventListener("click", onAccordionButtonClick)
);
