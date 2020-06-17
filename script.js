// - - - - - - - - - -
setTheme(title = 'scopes');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -
    var a = 42;
    let b = 108;

    log('window.a:', window.a);
    log('window.b:', window.b);
    log('outer > a,b', a, b);

    function ownFunction() {
        if (true) {
            var a = 43;
            let b = 109;
        }
        log('inner > a,b', a, b);
    }

    ownFunction();
    // - - - - - - - - - -
}