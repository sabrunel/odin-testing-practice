function reverseString(input) {

    if (!input || typeof(input) !== "string") {
        throw new Error("Input must be a string");
    }

    return input.split("").reverse().join("");
}

module.exports = reverseString