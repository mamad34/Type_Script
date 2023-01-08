"use strict";
function add(n1, n2, showResult, phrasae) {
    if (showResult) {
        console.log(phrasae + n1 + n2);
    }
    else
        return n1 + n2;
}
let number1;
number1 = 5;
const number2 = 2.8;
const result = add(number1, number2, true, "fuck");
console.log(result);
