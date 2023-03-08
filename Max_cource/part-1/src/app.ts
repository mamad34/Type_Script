const button = document.getElementById("dick");

function clickHandler(message: string) {
  console.log("clickHandler");
}

if (button) {
  button.addEventListener("click", clickHandler.bind(null, "hello world"));
}
