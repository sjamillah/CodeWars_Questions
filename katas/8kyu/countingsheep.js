function countSheeps(sheep) {
    /*Count the number of true values in an array representing sheep presence, where true indicates a sheep is present.*/
    let count = 0; //sets a counter for each sheep
    for(let i = 0; i < sheep.length; i++) { //loops through the array
      if(sheep[i] === true) { //checks if the sheep in a specific index has a value of true i.e it being present
        count += sheep[i]; //if the sheep is true it'll be added to the counter
      }
    }
    return count; //returns the total number of sheep present in the array/list
}
console.log(countSheeps([true, true, false, false, true, false, true, true, true, true, false, false, false, true]));