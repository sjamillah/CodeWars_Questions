function basicOp(operation, value1, value2) {
    // Your task is to create a function that does four basic mathematical operations.
    // The function should take three arguments - operation(string/char), value1(number), value2(number).
    // The function should return result of numbers after applying the chosen operation.
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return "Invalid operation";
    }
}
console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 15, 18));
console.log(basicOp('*', 5, 5));
console.log(basicOp('/', 49, 7));