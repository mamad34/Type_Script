"use strict";
function combine(n1, n2, resultType) {
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number' && resultType === 'as-number') {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    if (resultType === 'as-number') {
        return +result;
    }
    else {
        return result.toString();
    }
    return result;
}
const conbineages = combine(60, 69, 'as-number');
console.log(conbineages);
const conbineStringAges = combine('60', '69', 'as-number');
console.log(conbineStringAges);
const conbinenass = combine("nworld", 'sexybitch', 'as-text');
console.log(conbinenass);
