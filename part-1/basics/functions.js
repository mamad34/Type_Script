"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("result: " + num);
}
function printResult2(num) {
    console.log("result: " + num);
    return;
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(80, 5));
let someBullShitValue;
// let combineValues : Function ;
let combineValues;
// this is a function that get two number and return a number
combineValues = add;
// combineValues = 4
// combineValues = printResult
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
