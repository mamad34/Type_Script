interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "fuck",
  age: 41,
  greet(phrase: string) {
    console.log(phrase + 1);
  },
};
