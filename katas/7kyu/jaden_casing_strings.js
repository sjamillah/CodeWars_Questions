String.prototype.toJadenCase = function () {
    // creates a new method to String.prototype that can be called on any string in the code
    /*Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real" */
    let sStr = this.split(' '); // this refers to the string that called the function and then it'll be broken into an array of words using a space as an operator
    for(let i = 0; i < sStr.length; i++) { // loops through the array of words
        sStr[i] = sStr[i].charAt(0).toUpperCase() + sStr[i].slice(1); 
        /*
        sStr[i]: the current word in the loop
        sStr[i].charAt(0): gets the first character of the word
        .toUpperCase(): converts the first character to uppercase
        sStr[i].slice(1): gets the rest of the word starting from the second character(index 1)
        +: creates a new string that combines the uppercased first character and the rest of the word
         */
    }
    return sStr.join(' '); //joins the words together to make a sentence
};
console.log("How can mirrors be real if our eyes aren't real".toJadenCase());