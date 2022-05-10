

import circle from './module.js';

console.log(circle);

let myCircle = new circle.Circle(8);

// Use a class' function
console.log(myCircle.circumference());

// use a class' property
console.log(myCircle.circumference);


console.log(circle.circumference(5));
console.log(circle.area(5));