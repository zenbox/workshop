// Common JS
// let circle = require('./circle.js');


// ES Modules import statement
import circle from './module.js';

console.log(circle);

let myCircle = new circle.Circle(8);

// Use a class' function
console.log(myCircle.calcCircumference());

// use a class' property
console.log(myCircle.circumference);


console.log(circle.calcCircumference(5));
console.log(circle.calcArea(5));