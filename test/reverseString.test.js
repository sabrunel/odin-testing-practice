const reverseString = require('../src/reverseString');

it("Returns a reversed input string", () => {
    expect(reverseString("Banana")).toBe("ananaB")
})

it("Throws an error if the input is not a string", () => {
    expect(() => {
        reverseString(123)
    }).toThrow("Input must be a string");
})

it("Throws an error if the input string is empty", () => {
    expect(() => {
        reverseString("")
    }).toThrow("Input must be a string");
})