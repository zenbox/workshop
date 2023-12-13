const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", (event) => {
    hamburger.classList.toggle("hamburger--open");
    document.body.classList.toggle("template-2--open");
});
