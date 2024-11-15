function myMap(arr, callback) {
    /* modifies the original array arr using myMap*/
    let result = [];

    for(let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr)); //callback allows you to perform the operation on each element
    }
    return result;
}
const numbers = [1, 2, 3];
const result = myMap(numbers, (num) => num * 2);
console.log(result);