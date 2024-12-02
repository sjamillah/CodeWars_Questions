function filter_list(l) {
    /*
    function takes a list of non-negative integers and strings and returns a new list with strings filtered out
    */
   let result = l.filter(char => typeof char === 'number' && char >= 0);
   return result;
}
console.log(filter_list([1, 2, 'a', 'b']));
console.log(filter_list([1, 'a', 'b', 0, 15]));
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));