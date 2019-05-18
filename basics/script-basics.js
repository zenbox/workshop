// mein erstes Programm
document.write("<b>hallo Welt!</b>");

// Variablen
var
  nettoPreis = 43, // number
  zahl2 = 108,
  deviceName = "Computer", // string
  flag = true, // boolean

  array = [true, "zwei", 3], // object
  object = { // object
    price: "38.4 €",
    "1.3.5": "ein Wert"
  },

  d;
let e = "neu";

// null, undefined, infinity
// null -> eine Variable existiert nicht
// undefined -> existiert, hat aber keinen Wert
var c = 42;
var pi = 3.14159;

c = "was anderes";

document.write("<br>")
document.write(typeof object);
document.write("<br>")
document.write(object.price);
document.write("<br>")
document.write(object["price"]);
document.write("<br>")
document.write(array[0]);


// Kontrollstrukturen

// Funktionen
//var doSomething = function () {};

function doSomething() {
  var cb = 108;
  console.log(cb);
  console.log(nettoPreis);
}

function doSomethingMore() {
  var cb = 108;
  console.log(cb);

}
// console.log(cb);
doSomething();
doSomethingMore();

// Ereignisse
window.addEventListener("load", function () {
  var cb = "hey there";
  console.log(cb);
});







// var c = nettoPreis * 2;
// document.write("<br>")
// document.write(a);
// document.write("<br>")
// document.write(c);