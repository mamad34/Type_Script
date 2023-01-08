// Code goes here!

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

// const add = (a: number, b: number = 4) => a + b;

const add = (...numbers: [number, number, number, number]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addNumbers = add(1, 2, 3, 4.8);

const hobbits = ["asd", "asd1", "asd2", "asd3"];

const [h1, h2, ...helse] = hobbits;

console.log(h1);
console.log(h2);
console.log(helse);

const person = {
  firstname: "John",
  age: 20,
};

const { firstname: dickname, age } = person;

console.log(dickname, age);
