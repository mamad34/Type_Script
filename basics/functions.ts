function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("result: " + num);
}

function printResult2(num: number): undefined {
  console.log("result: " + num);
  return;
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(80, 5));

let someBullShitValue: undefined;

// let combineValues : Function ;

let combineValues: (a: number, b: number) => number;
// this is a function that get two number and return a number

combineValues = add;
// combineValues = 4
// combineValues = printResult
console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
