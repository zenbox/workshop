//
// class CustomerColorTheme(){ }

let root = document.querySelector(":root");
let compStyle = window.getComputedStyle(root);

console.log(compStyle.getPropertyValue("--cardBackground"));

localStorage.setItem("bgColor", "orange");

let bgColor = localStorage.getItem("bgColor");
root.style.setProperty("--cardBackground", bgColor);


console.log(root.dataset.customerId)