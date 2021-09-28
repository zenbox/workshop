let templateContent = document.querySelector('.template-content');
let hamburgerButton = document.querySelector('#hamburger-button');

hamburgerButton.addEventListener('click', (event) => {
    templateContent.classList.toggle('active');
});