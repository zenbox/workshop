console.clear();

// Stephan:
// - - - - - - - - - -
function doAdd(pNum1, pNum2, pNum3) {
    var mNum = 0;
    if (typeof pNum1 === 'number') {
        mNum += pNum1;
    }
    if (typeof pNum2 === 'number') {
        mNum += pNum2;
    }
    if (typeof pNum3 === 'number') {
        mNum += pNum3;
    }
    if (typeof pNum1 !== 'number' && typeof pNum2 !== 'number' && typeof pNum3 !== 'number') {
        return undefined;
    }
    return mNum;
}
// - - - - - - - - - -

console.log('\nStephan\n- - - - -');
console.log('doAdd(5, 6, 7): ', doAdd(5, 6, 7));
console.log('doAdd("fünf", 6, 7): ', doAdd('fünf', 6, 7));
console.log('doAdd("5", 6, 7): ', doAdd('5', 6, 7));
console.log('doAdd(5, 6): ', doAdd(5, 6));
console.log('doAdd(5, 6, true): ', doAdd(5, 6, false));


// Johannes
// - - - - - - - - - -
var summe;

function addieren(zahl1, zahl2) {
    if (typeof zahl1 === 'number' && typeof zahl2 === 'number') {
        return zahl1 + zahl2;
    } else {
        return 'Das klappt nicht!';
    }
}
// - - - - - - - - - -

console.log('\nJohannes\n- - - - -');

summe = addieren(2, 2);
console.log('addieren(2, 2): ', summe);

summe = addieren('2', 2);
console.log('addieren("2", 2): ', summe);

summe = addieren('zwei', 2);
console.log('addieren("zwei", 2): ', summe);

summe = addieren(true, 2);
console.log('addieren(true, 2): ', summe);


//Sascha
// - - - - - - - - - -
function add(n1, n2, n3) {
    function check(parm) {
        if (!isNaN(parm)) {
            parm = parseFloat(parm); // parseFloat('4abc5) -> 4
        } else {
            parm = 0;
        }

        return parm;
    }
    n1 = check(n1);
    n2 = check(n2);
    n3 = check(n3);
    return (n1 + n2 + n3);
}
// - - - - - - - - - -

console.log('\nSascha\n- - - - -');
console.log('add(1, 2, 7): ', add(1, 2, 7));
console.log('add(1, "2", 7): ', add(1, '2', 7));
console.log('add(1, "pommes", 7): ', add(1, "pommes", 7));
console.log('add(1, false, 7): ', add(1, false, 7));





/**
 * Add several numbers
 * @param {number} n1 integer or float number
 * @param {number} n2 integer or float number
 * @param {number} n3 integer or float number
 * @return {number}
 */
function calculateSum(n1, n2, n3) {

    var
        _sum = 0,
        _n1 = n1 || 0,
        _n2 = n2 || 0,
        _n3 = n3 || 0;

    function check(p) {
        if (isNaN(p)) {
            _p = 0;
        } else {
            _p = parseFloat(p);
        }
        return _p;
    }

    _n1 = check(_n1);
    _n2 = check(_n2);
    _n3 = check(_n3);

    _sum = _n1 + _n2 + _n3;
    return _sum
}

console.log('\nCommon\n- - - - -');
console.log('_add(1, 5, 7): ', calculateSum(1, 5, 7));
console.log('_add(1, "5", 7): ', calculateSum(1, '5', 7));
console.log('_add(1, false, 7): ', calculateSum(1, false, 7));