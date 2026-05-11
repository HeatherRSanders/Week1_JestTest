//jest testing.

const {
    sum,
    subtract,
    multiply,
    divide,
    sqrt,
    max
} = require('./math');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('subtracts 5 - 2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
});

test('multiplies 3 * 4 to equal 12', () => {
    expect(multiply(3, 4)).toBe(12);
});

test('divides 10 / 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
});

test('takes square root of 16 to equal 4', () => {
    expect(sqrt(16)).toBe(4);
});

test('finds max of 5 and 10 to equal 10', () => {
    expect(max(5, 10)).toBe(10);
});