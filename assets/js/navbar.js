// MEINE VERSION:
document.addEventListener("DOMContentLoaded", function () {
    // - - - - - - - - - -
    (() => {
        let $ = (el) => document.querySelector(el);

        $(".navbar__btn").addEventListener("click", function () {
            this.classList.toggle("navbar__btn--active");
            $(".navbar__nav").classList.toggle("navbar__nav--active");
        });
    })();
    // - - - - - - - - - -
});

// ORIGINAL:
document.addEventListener("DOMContentLoaded", function () {
    // - - - - - - - - - -
    (() => {
        let $ = (el) => document.querySelector(el);

        $(".animenu__btn").addEventListener("click", function () {
            this.classList.toggle("animenu__btn--active");
            $(".animenu__nav").classList.toggle("animenu__nav--active");
        });
    })();
    // - - - - - - - - - -
});
