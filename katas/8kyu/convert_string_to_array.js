function stringtoArray(string) {
    /* 
    function takes in a string and splits it then returns an array
    */
   let splitted = string.split(' '); //splits the string at every space making us get individual words
   return splitted;
}
console.log(stringtoArray("Robin Singh"));
console.log(stringtoArray("I love arrays they are my favorite"));