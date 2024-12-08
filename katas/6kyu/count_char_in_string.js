function count(string) {
    /*
    The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
    What if the string is empty? Then the result should be empty object literal, {}.
    */
    let obj1 = {}; //we set an empty object
    if(string === '') {
        //if the string is empty it returns an empty object literal
        return obj1;
    }
    let str = string.split(''); //splits the characters of the string one by one to make an array of individual elements
    for(let i = 0; i < str.length; i++) {
        //loops through the new array of the split characters of the string
        if(obj1[str[i]]) {
            //the condition checks if the char is a key of the object
            obj1[str[i]] += 1; //it will increment the char if it was an key of the object before
        } else {
            obj1[str[i]] = 1; //it will check for the char if it is a key and it'll set it to 1 as the initial count of the char and then later it'll be incremented above
        }
    }
    return obj1; //returns the object literal that includes the char and the number of times that char was counted
}
console.log(count(''));
console.log(count('a'));
console.log(count('ab'));
console.log(count('hello'));
console.log(count('enthusiastic'));