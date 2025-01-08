function correct(string)
{
    //the elements S, O and I are misinterpreted as 5, 0 and 1
    //change the string to an array of elements
    //filter out the elements
    //fill the elements with the letters if misinterpreted
    let str = string.split(''); //splits the string into an array of elements
    //uses the map function to transform the word
    let answer = str.map((el) => {
        //checks for the elements 5, 0, and 1 and replaces them with S, O and I
        if(el === '5') {
            return 'S';
        }
        if(el === '0') {
            return 'O';
        }
        if(el === '1') {
            return 'I';
        }
        return el; //returns each elements replaced
    });
    return answer.join(''); //returns the final word with the transformed characters
}
console.log(correct('L0ND0N'));
console.log(correct('DUBL1N'));