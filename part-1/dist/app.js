"use strict";
console.log("first");
const button = document.getElementById("dick");
console.log(document);
if (button) {
    button.addEventListener("click", () => {
        console.log("CLicked button");
    });
}
