// Given two sorted arrays, merge them into a single sorted array. 
// Example: 
// Input: nums1 = [1, 3, 5], nums2 = [2, 4, 6]
// Output: [1, 2, 3, 4, 5, 6]
function sortarray(nums1, nums2) {
    let arr = nums1.concat(nums2); //uses the concat() method to concatenate nums1 array to nums2 array to form new array arr
    let result = arr.sort((a, b) => a - b); //sorts the new array formed in ascending order
    return result;
}
console.log(sortarray([1, 3, 5], [2, 4, 6]));