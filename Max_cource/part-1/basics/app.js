"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "Max";
// userName = userInput
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code,
    };
}
const result = generateError("Invalid , dick Number", 500);
console.log(result);
