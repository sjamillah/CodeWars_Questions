function none(arr, fun) {
    // Write a function that takes two arguments: an array and a callback function (in Ruby: a block).
    // The function should return true if the callback / block returns false for all of the items in the array, or if the array is empty; otherwise return false.
    
    // Loop through each element of the array
    for(let i = 0; i < arr.length; i++) {
        if(fun(arr[i], i, arr)) {
            // if the callback function returns true for any element, return false
            return false;
        }
    }
    // if the callback function never returns true, return true
    return true;
}
console.log(none([1, 2, 3, 4, 5], function(item) {
    return item > 5;
}));
console.log(none([1, 2, 3, 4, 5], function(item) {
    return item > 4;
}));