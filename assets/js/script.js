/**
 * @description: Initialisierung des Hamburger-Menüs
 * @param {HTMLElement} element - Das Hamburger-Menü-Element
 * @returns {void}
 * @example: new HamburgerMenu(document.querySelector('.hamburger-button'));
 * @example: HamburgerMenu.init();
 * @version: 1.0
 * @date: 2023-10-01
 */
document.querySelectorAll(".hamburger-button").forEach((button) => {
    button.addEventListener("click", () => {
        const isActive = button.classList.contains("active");
        button.classList.toggle("active");

        // Accessibility: Update aria attributes
        button.setAttribute("aria-expanded", !isActive);
        button.setAttribute(
            "aria-label",
            isActive ? "Menü öffnen" : "Menü schließen"
        );

        // Nav wird durch CSS automatisch angezeigt wenn Button active ist
        // Die Animation wird durch die +* Selektoren in _hamburger.scss gesteuert
    });
});

/**
 * @description: Slider mit semantischen HTML-Elementen und ARIA-Attributen
 * @version: 1.0
 * @date: 2023-10-01
 */
class SemanticSlider {
    constructor(element) {
        this.slider = element;
        this.slides = this.slider.querySelectorAll(".my-slider__slide");
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        this.isPlaying = false;
        this.playInterval = null;

        this.init();
    }

    init() {
        this.prevButton = this.slider.querySelector(".my-slider__button--prev");
        this.nextButton = this.slider.querySelector(".my-slider__button--next");
        this.playButton = this.slider.querySelector(".my-slider__button--play");
        this.dots = this.slider.querySelectorAll(".my-slider__dot");
        this.status = this.slider.querySelector(".my-slider__status span");

        this.bindEvents();
        this.showSlide(0);
    }

    bindEvents() {
        this.prevButton.addEventListener("click", () => this.previousSlide());
        this.nextButton.addEventListener("click", () => this.nextSlide());
        this.playButton.addEventListener("click", () => this.togglePlay());

        this.dots.forEach((dot, index) => {
            dot.addEventListener("click", () => this.goToSlide(index));
        });

        // Tastaturnavigation
        this.slider.addEventListener("keydown", (e) => this.handleKeyboard(e));

        // Touch/Swipe Support
        let touchStartX = 0;
        let touchEndX = 0;

        this.slider.addEventListener("touchstart", (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        this.slider.addEventListener("touchend", (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        });

        // Pause bei Hover
        this.slider.addEventListener("mouseenter", () => {
            if (this.isPlaying) this.pause(false);
        });

        this.slider.addEventListener("mouseleave", () => {
            if (this.isPlaying) this.play();
        });
    }

    handleKeyboard(e) {
        switch (e.key) {
            case "ArrowLeft":
                e.preventDefault();
                this.previousSlide();
                break;
            case "ArrowRight":
                e.preventDefault();
                this.nextSlide();
                break;
            case "Home":
                e.preventDefault();
                this.goToSlide(0);
                break;
            case "End":
                e.preventDefault();
                this.goToSlide(this.totalSlides - 1);
                break;
            case "Enter":
            case " ":
                if (e.target.classList.contains("my-slider__button--play")) {
                    e.preventDefault();
                    this.togglePlay();
                }
                break;
        }
    }

    handleSwipe(startX, endX) {
        const threshold = 50;
        if (endX < startX - threshold) {
            this.nextSlide();
        } else if (endX > startX + threshold) {
            this.previousSlide();
        }
    }

    showSlide(index) {
        this.slides.forEach((slide, i) => {
            slide.classList.toggle("my-slider__slide--active", i === index);
            slide.setAttribute("aria-hidden", i !== index);
        });

        this.dots.forEach((dot, i) => {
            dot.classList.toggle("my-slider__dot--active", i === index);
            dot.setAttribute("aria-current", i === index);
        });

        this.currentSlide = index;
        this.updateStatus();
    }

    updateStatus() {
        this.status.textContent = `Aktueller Slide: ${
            this.currentSlide + 1
        } von ${this.totalSlides}`;
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(nextIndex);
    }

    previousSlide() {
        const prevIndex =
            (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.goToSlide(prevIndex);
    }

    goToSlide(index) {
        this.showSlide(index);
    }

    togglePlay() {
        if (this.isPlaying) {
            this.pause(true);
        } else {
            this.play();
        }
    }

    play() {
        this.isPlaying = true;
        this.playButton.setAttribute("aria-pressed", "true");
        this.playButton.setAttribute(
            "aria-label",
            "Automatisches Abspielen stoppen"
        );
        this.playButton.querySelector(
            ".material-icons:first-child"
        ).style.display = "none";
        this.playButton.querySelector(
            ".material-icons:last-child"
        ).style.display = "block";

        this.playInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }

    pause(updateButton = true) {
        this.isPlaying = false;
        clearInterval(this.playInterval);

        if (updateButton) {
            this.playButton.setAttribute("aria-pressed", "false");
            this.playButton.setAttribute(
                "aria-label",
                "Automatisches Abspielen starten"
            );
            this.playButton.querySelector(
                ".material-icons:first-child"
            ).style.display = "block";
            this.playButton.querySelector(
                ".material-icons:last-child"
            ).style.display = "none";
        }
    }
}

/**
 * @description: Initialisierung des Sliders
 * @param {HTMLElement} element - Das Slider-Element
 * @returns {void}
 * @example: new SemanticSlider(document.querySelector('.my-slider'));
 */
// Initialisierung
document.addEventListener("DOMContentLoaded", () => {
    const sliderElement = document.querySelector(".my-slider");
    if (sliderElement) {
        new SemanticSlider(sliderElement);
    }
});
