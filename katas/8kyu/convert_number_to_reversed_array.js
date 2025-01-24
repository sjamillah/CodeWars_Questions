function digitize(n) {
    /*
    Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
    */
    let result = Array.from(String(n)); //changes the individual number to an array but as a string
    let answer = result.reverse(); //reverses the array of strings
    return answer.map(Number); //returns the array result as a string and uses the map function to change it to a number
}
console.log(digitize(35231));
console.log(digitize(0));