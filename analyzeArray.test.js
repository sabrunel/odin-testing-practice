const analyzeArray = require("./analyzeArray");

it("Returns an object with the min, max, average values of the input array and its length", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      })
})

it("Throws an Error when no input is supplied", () => {
    expect(() => {
        analyzeArray();
    }).toThrow("The input must be a non-empty array");
})

it("Throws an Error when an empty array is supplied", () => {
    expect(() => {
        analyzeArray([]);
    }).toThrow("The input must be a non-empty array");
})

it("Throws an Error when non-numeric values are supplied in the array", () => {
    expect(() => {
        analyzeArray(["a", 1]);
    }).toThrow("The input array must only contain numeric values");
})