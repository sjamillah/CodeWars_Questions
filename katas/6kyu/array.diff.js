function arrayDiff(a, b) {
    //function that implements a difference function which subtracts one list from another and returns the result.
    //It should remove all values from list a, which are present in list b keeping their order.
    //arrayDiff([1,2],[1]) == [2]
    //If a value is present in b, all of its occurrences must be removed from the other:
    //arrayDiff([1,2,2,2,3],[2]) == [1,3]
    let result1 = a.filter((el) => !b.includes(el)); //filters out the elements in array a that are in array b or otherwise
    return result1;
}
console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));