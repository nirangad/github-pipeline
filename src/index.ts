import { add, sub, mul, div } from "./calculator";

type Person = {
  name: string;
  age: number;
  job: Job;
};

type Job = {
  designation: string;
  salary: number;
};

const welcome = (person: Person): void => {
  console.table(person);
};

welcome({
  name: "Niranga",
  age: 34,
  job: {
    designation: "TL",
    salary: 300000,
  },
});

console.log("Adding", add(10, 20));
console.log("Subtracting", sub(10, 20));
console.log("Multiplying", mul(10, 20));
console.log("Dividing", div(10, 20));
