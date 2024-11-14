function longest(s1, s2) {
    /*Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
    Examples:
    a = "xyaabbbccccdefww"
    b = "xxxxyyyyabklmopq"
    longest(a, b) -> "abcdefklmopqwxy"

    a = "abcdefghijklmnopqrstuvwxyz"
    longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */
    let combine = s1 + s2;
    let sorted = [...new Set(combine)].sort().join(''); // uses Set to remove repeating characters, sort to sortout the characters in ascending order, join to join everything
    return sorted;
}
console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
console.log(longest("abcdefghijklmnopqrstuvwxyz"));