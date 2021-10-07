let likeElements = document.querySelectorAll('.like');

for (let i = 0; i < likeElements.length; i += 1) {
    likeElements[i].addEventListener('click', (event) => {
        event.target.classList.toggle('like-default');
        event.target.classList.toggle('like-selected');
    })
}