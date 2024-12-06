function descendingOrder(n) {
    /*
    function takes in a non-negative number and returns the digits in descending order and rearrange the digits to create the highest possible number
    */
   let str = n.toString().split(''); //changes the number to a string and splits it to a string array
   let sorted = str.sort((a, b) => b - a); //sorts the digits to a descending order
   return Number(sorted.join('')); //returns the descending order number and changes it back to a number from string after joining it
}
console.log(descendingOrder(0));
console.log(descendingOrder(1));
console.log(descendingOrder(111));
console.log(descendingOrder(42145));
console.log(descendingOrder(145263));
console.log(descendingOrder((123456789)));