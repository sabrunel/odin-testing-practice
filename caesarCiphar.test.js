const caesarCipher = require('./caesarCipher');

it("Replaces all letters in the input string with the next letter in the alphabet ", () => {
    expect(caesarCipher("BANANA", 1)).toBe("CBOBOB");
})

it("Replaces all letters in the input string with the next letter in the alphabet and keeps the same case", () => {
    expect(caesarCipher("Banana", 1)).toBe("Cbobob");
})

it("Replaces all letters in the input string with the next letter in the alphabet and keeps special characters in place", () => {
    expect(caesarCipher("Banana!", 1)).toBe("Cbobob!");
})

it("Replaces all letters in the input string according to the specified shift factor when it is supplied as a string", () => {
    expect(caesarCipher("banana", "1")).toBe("cbobob");
})

it("Replaces all letters in the input string according to the specified shift factor and starts again from A after reaching Z", () => {
    expect(caesarCipher("ZULU", 2)).toBe("BWNW");
})

it("Replaces all letters in the input string according to the specified shift factor and starts again from a after reaching z", () => {
    expect(caesarCipher("yoda", 2)).toBe("aqfc");
})

it("Throws an error if the input is an empty string", () => {
    expect(() => {
        caesarCipher("", 2)
    }).toThrow("Input must be a string");
})

it("Throws an error if the input is not a string", () => {
    expect(() => {
        caesarCipher(1, 2)
    }).toThrow("Input must be a string");
})