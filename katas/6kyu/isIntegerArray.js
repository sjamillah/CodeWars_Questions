function isIntArray(arr) {
    /* 
    Write a function that:

    returns true  / True if every element in an array is an integer or a float with no decimals.
    returns true  / True if array is empty.
    returns false / False for every other input.
    */
    if(!Array.isArray(arr)) {
        return false
    }
    if(arr.length === 0) {
        return true
    }
    let res = arr.every(el => Number.isInteger(el))
    return res
}
console.log(isIntArray([3, 4, 5, 6]))
console.log(isIntArray([]))
console.log(isIntArray(false, true))