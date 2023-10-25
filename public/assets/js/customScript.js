function loadContent(event) {
  event.preventDefault();
  console.log("%c A LINK WAS CLICKED", "color: red; font-size: 20px;");

  let url = event.target.parentElement.href;
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });

  const links = document.querySelectorAll("main nav li a");

  links.forEach((link) => {
    links.forEach((link) => {
      link.classList.remove("active");
    });
    event.target.parentElement.classList.add("active");
  });
}

export { loadContent };
