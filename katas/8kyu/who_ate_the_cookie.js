function cookie(x) {
    //For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"
    // Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)
    // Note: Make sure you return the correct message with correct spaces and punctuation.
    // Please leave feedback for this kata. Cheers!

    let str = 'Zach';
    let num = 'Monica';
    let any = 'the dog';
    // we check the datatype of each input(x) we hVE
    if(typeof x === 'string') {
        // we use typeof x because if we use type(x) it is redundancy so the best way is to use the one without
        // the brackets and then normally it would return a string and the reason as to why we use the quotes
        return `Who ate the last cookie? It was ${str}!`;
    } else if(typeof x === 'number') {
        // checks if the type is a number i.e float or int
        return `Who ate the last cookie? It was ${num}!`;
    } else {
        // otherwise
        return `Who ate the last cookie? It was ${any}!`;
    }
}
console.log(cookie('Ryan'));
console.log(cookie(26));
console.log(cookie(2.3));
console.log(cookie(true));