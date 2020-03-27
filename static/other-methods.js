// - - - - - - - - - -
setTheme(title = 'other methods');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -
    //         0123456789012345678901234567
    let str = 'Ann dances jive at the party';

    // String startsWith()
    log('startsWith', str.startsWith("Ann", 0));
    log('startsWith', str.startsWith("dances", 4)); // at position 4

    // String endsWith()
    log('endsWidth', str.endsWith("party"));
    log('endsWidth', str.endsWith("party", 28)); // before position 28

    // String includes()
    log('includes', str.includes("jive"));
    log('includes', str.includes("jive", 11)); // at position 11


    // Math.sign()
    log('sign', Math.sign(42));
    log('sign', Math.sign(-42));
    log('sign', Math.sign(NaN));
    log('sign', Math.sign(str));

    // Math.trunc()
    log('trunc', Math.trunc(42.7));
    log('trunc', Math.trunc(-42.7));
    log('trunc', Math.trunc(0.234));
    log('trunc', Math.trunc(-0.1234));
    log('trunc', Math.trunc(NaN));
    log('trunc', Math.trunc(str));

    // Number.EPSILON

    // Number.isSafeInteger()
    log('isSafeInteger', Number.isSafeInteger(42));
    log('isSafeInteger', Number.isSafeInteger(9007199254740992));

    // Number.isNaN()
    log('isNan', Number.isNaN(42));
    log('isNan', Number.isNaN(NaN));

    // Number.isFinite()
    log('isFinite', Number.isFinite(123));
    log('isFinite', Number.isFinite(NaN));
    log('isFinite', Number.isFinite(Infinity));
    log('isFinite', Number.isFinite(-Infinity));
    // - - - - - - - - - -
}