function SeriesSum(n) {
    /*
    Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).
    Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 + ...
    You will need to figure out the rule of the series to complete this.

    Rules
    You need to round the answer to 2 decimal places and return it as String.

    If the given value is 0 then it should return "0.00".

    You will only be given Natural Numbers as arguments.

    Examples (Input --> Output)
    n
    1 --> 1 --> "1.00"
    2 --> 1 + 1/4 --> "1.25"
    5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
    */
    let sum = 0; //initialize the sum to 0
    if(n === 0) {
        return "0.00";
    }
    for(let i = 1; i <= n; i++) {
        //this loops through the individual elements of the set number
        let denominator = 1 + 3 * (i - 1); //sets the denominator of the number to a series function that will add 1 to the individual element and multiply 3 to it
        sum += 1 / denominator; //adds all the elements in the series
    }
    return sum.toFixed(2); //returns the sum as a string to 2 decimal places 
}
console.log(SeriesSum(1)); //1.00
console.log(SeriesSum(2)); //1.25
console.log(SeriesSum(3)); //1.39
console.log(SeriesSum(5)); //1.57