L = (n, L0, L1, add) => {
    // inputs the:
        // n: Leonardo numbers to be displayed
        // L0 and L1: The initial numbers
        // add: the add number
    // output: n as an array of elements
    let sequence = [L0, L1] // initializes the first two numbers to the sequence array

    for(let i = 2; i < n; i++)
        // we start from index 2 since the first two elements are in the array
        // then the index should be less than the number of elements we should output
        sequence.push(sequence[i - 1] + sequence[i - 2] + add); // pushes the add numbers from the formula to the array

    return sequence; //outputs the array
}
console.log(L(5, 1, 1, 1));
console.log(L(5, 0, 0, 2));
console.log(L(10, 0, 1, 4));