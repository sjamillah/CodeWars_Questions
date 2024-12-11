function removeEveryOther(arr) {
    /*
    Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
    Example:
    ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
    None of the arrays will be empty, so you don't have to worry about that!
    */
   let result = arr.filter((_, index) => index % 2 === 0);
   return result;
}
console.log(removeEveryOther(['Keep', 'Remove', 'Keep', 'Remove']));
console.log(removeEveryOther(['Keep', 'Remove', 'Keep', 'Remove', 'Remove', 'Keep']));