/** Hamburger Menu
 *
 * @desc
 *
 * @package Webapplication
 * @module Navigation
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2024-06-11
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2024 Michael Reichart, Cologne
 */

document.addEventListener("DOMContentLoaded", () => {
    // - - - - - - - - - -
    const menuButton = document.getElementById("menu-button");
    const menuIsOpened = document.getElementById("hamburger__menu-is-opened"); // close icon
    const menuIsClosed = document.getElementById("hamburger__menu-is-closed"); // bars icon

    menuButton.addEventListener("click", (event) => handleNavigation(event));

    function handleNavigation(event) {
        event.preventDefault();
        const main = document.querySelector(".template-1__main");
        main.classList.toggle("opened");

        if (main.classList.contains("opened")) {
            menuIsOpened.classList.add("visible"); // close icon
            menuIsOpened.classList.remove("hidden");

            menuIsClosed.classList.add("hidden"); // bars icon
            menuIsClosed.classList.remove("visible");
        } else {
            menuIsOpened.classList.add("hidden"); // close icon
            menuIsOpened.classList.remove("visible");

            menuIsClosed.classList.add("visible"); // bars icon
            menuIsClosed.classList.remove("hidden");
        }
    }

    // - - - - - - - - - -
});
