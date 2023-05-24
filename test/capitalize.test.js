const capitalize = require("../src/capitalize");

it("Returns a capitalized string when a lowercase string is supplied", () => {
    expect(capitalize("banana")).toBe("Banana");
})

it("Returns a capitalized string when an uppercase string is supplied", () => {
    expect(capitalize("BANANA")).toBe("Banana");
})

it("Returns a capitalized string when a string that mixes lowercase and uppercase characters is supplied", () => {
    expect(capitalize("BaNaNa")).toBe("Banana");
})

it("Returns the input string when a capitalized string is supplied", () => {
    expect(capitalize("Banana")).toBe("Banana");
})

it("Throws an error if the input is an empty string", () => {
    expect(() => {
        capitalize("")
    }).toThrow("Input must be a string");
})

it("Throws an error if the input is not a string", () => {
    expect(() => {
        capitalize(123)
    }).toThrow("Input must be a string");
})

it("Throws an error if the input string starts with a special character", () => {
    expect(() => {
        capitalize("!Banana")
    }).toThrow("Input string must start with a letter");
})

it("Throws an error if the input string starts with a number", () => {
    expect(() => {
        capitalize("1Banana")
    }).toThrow("Input string must start with a letter");
})