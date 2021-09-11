import { add, sub, mul, div } from "../src/calculator";

test("Adds 10 + 20 to equal 30", () => {
  expect(add(10, 20)).toBe(30);
});

test("Subtracts 10 - 20 to equal -10", () => {
  expect(sub(10, 20)).toBe(-10);
});

test("Multiply 10 * 20 to equal 200", () => {
  expect(mul(10, 20)).toBe(200);
});

test("Divide 10 / 20 to equal 0.5", () => {
  expect(div(10, 20)).toBe(0.5);
});
