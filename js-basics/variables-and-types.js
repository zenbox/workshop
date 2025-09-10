// Variablen

typeof data; // null
if (data !== null) {
} else {
    ("existiert nicht");
}

// untypisiert:
let data;
typeof data; // 'undefined'

// Wertezuweisung, hier object
data = {};
typeof data; // 'object'
// data.length ? undefined

data = [];
typeof data; // 'object', nicht 'array'
// data.length = 0

// boolsche Frage: true || false
if (data && data.length > 0) {
}
// => if(data === true)

// string, number, boolean
let text = "juchuu";
let number = 123;
let bool = false;
typeof text; // string -> Objekt vom Typ String
