const reverseSeq = n => {
    let result = [];
    for (var i = n; i > 0; i--) { //moves through indices equal to the number of characters
      result.push(i); //adds the elements to the array
    }
    return result;
  };
  console.log(reverseSeq(5));