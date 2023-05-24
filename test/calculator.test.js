const calculator = require("../src/calculator");

it("Adds two numbers", () => {
    expect(calculator.add(1,2)).toEqual(3);
})

it("Subtracts two numbers", () => {
    expect(calculator.subtract(1,2)).toEqual(-1);
})

it("Divides two numbers", () => {
    expect(calculator.divide(1,2)).toEqual(0.5);
})

it("Multiplies two numbers", () => {
    expect(calculator.multiply(1,2)).toEqual(2);
})

it("Throws an error when dividing by 0", () => {
    expect(() => {
        calculator.divide(1,0)
    }).toThrow("Cannot divide by 0");
})
