// - - - - - - - - - -
setTheme(title = 'chaining');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -

    // define the "class"
    let _fn = function () {
        this.version = '0.1';
        this.os = 'MacOS X';
        this.browser = 'Chrome';
    };
    _fn.prototype.setVersion = function (version) {
        this.version = version;
        return this;
    };

    _fn.prototype.setOs = function (os) {
        this.os = os;
        return this;
    };

    _fn.prototype.setBrowser = function (browser) {
        this.browser = browser;
        return this;
    };

    _fn.prototype.save = function () {
        console.log(
            'saving ' + this.version + ', on ' +
            this.os + ' with ' + this.browser + '.'
        );
        return this;
    };

    let fn = new _fn();

    // instead of
    // fn.setVersion('1');
    // fn.setOs('MacOS XI');
    // fn.setBrowser('Chrome Xtra');
    // fn.save();

    // write a chain
    fn
        .setVersion('2')
        .setOs('MacOS XII')
        .setBrowser('Chrome Xtra Large')
        .save();

    // - - - - - - - - - -
}