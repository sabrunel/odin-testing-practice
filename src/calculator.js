function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by 0");
    }
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

const calculator = {
    add,
    subtract,
    divide,
    multiply
}

module.exports = calculator