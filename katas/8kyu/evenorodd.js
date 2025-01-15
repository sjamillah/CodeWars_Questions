function evenOrOdd(number) {
    //function returns "Even" if a number inputed is even and "Odd" if otherwise
    if(number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(evenOrOdd(9));
console.log(evenOrOdd(4));