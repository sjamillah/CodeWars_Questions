function openOrSenior(data) {
    /* 
    function returns "Senior" if you're atleast 55 years old and have a handicap greater than 7 else it returns "Open"
    inputs = [[a,b], [c,d], [e,f]]
    outputs = ['Open', 'Senior', 'Senior']
    */
   let result = [];
    for(let [age, handicap] of data) {
        //the for...of is used to access the elements in the array like in the pair values above
        if(age >= 55 && handicap > 7) {
            result.push("Senior");
        } else {
            result.push("Open");
        }
    }
    return result;
}
console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]));