/**
 * @desc Das Verhalten für das Hamburger Menu
 *       und die Off Canvas Navigation
 *       DOM - Document Object Model
 */
document.addEventListener("DOMContentLoaded", () => {
    // - - - - - - - - -
    // Do something
    const hamburger = document.querySelector("#hamburger");

    hamburger.addEventListener("click", (event) => {
        /* Toggle mobile menu 
        "open" wird sowohl den <body> mitgegeben, als auch dem "#hamburger"
        So lässt es sich in CSS einfach und lesbar gestalten.
        */
        hamburger.classList.toggle("hamburger--open");
        document.body.classList.toggle("template-2--open");
    });
    // - - - - - - - - -
});
