const uniqueInOrder = (iterable) => {
    // input: arguments that are maybe an array or string
    // output: the elements next to each other shouldn't be similar

    // checks if the iterable is an array otherwise it'll change it to an array
    let arr = Array.isArray(iterable) ? iterable : [...iterable];

    // it will make sure the elements in the array the previous one isn't the same as the next one in the array
    return arr.filter((el, index) => el !== arr[index - 1]);
}
console.log(uniqueInOrder("AAAABBBCCDAABBB"))
console.log(uniqueInOrder("ABBCcAD"))
console.log(uniqueInOrder([1,2,2,3,3]))