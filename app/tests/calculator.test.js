"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculator_1 = require("../src/calculator");
test("Adds 10 + 20 to equal 30", function () {
    expect(calculator_1.add(10, 20)).toBe(30);
});
test("Subtracts 10 - 20 to equal -10", function () {
    expect(calculator_1.sub(10, 20)).toBe(-10);
});
test("Multiply 10 * 20 to equal 200", function () {
    expect(calculator_1.mul(10, 20)).toBe(200);
});
test("Divide 10 / 20 to equal 0.5", function () {
    expect(calculator_1.div(10, 20)).toBe(0.5);
});
