function fakeBin(x) {
    /*
    Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
    Note: input will never be an empty string
    */
   let str = x.split('');
   let result = '';
   for(let i = 0; i < str.length; i++) {
    if(str[i] < 5) {
        result += '0';
    } else {
        result += '1';
    }
   }
   return result;
}
console.log(fakeBin('45385593107843568'));
console.log(fakeBin('509321967506747'));
console.log(fakeBin('366058562030849490134388085'));