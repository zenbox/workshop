// - - - - - - - - - -
setTheme(title = 'literals');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -

    // old way
    let string = 3 + 4 + 'hello' + ' ' + (1 + 2) + 'world';
    log(string);

    // new way 
    function add(a, b) {
        return a + b;
    }

    let times = 15;

    let better = `hello world, 
    it turns ${add(3,4)} times`;

    log(better);
    // - - - - - - - - - -
}