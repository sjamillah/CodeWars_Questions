function squareSum(numbers) {
    //functions sums all the numbers in the array and returns the sum of the numbers
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += (numbers[i] ** 2);
    }
    return sum;
}
console.log(squareSum([1, 2, 2]));
console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum([]));