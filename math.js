//Functions for Math testing
function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

function sqrt(a) {
    if (a < 0) {
        throw new Error("Cannot take square root of a negative number");
    }

    return Math.sqrt(a);
}

function max(a, b) {
    return Math.max(a, b);
}

module.exports = {
    sum,
    subtract,
    multiply,
    divide,
    sqrt,
    max
};
