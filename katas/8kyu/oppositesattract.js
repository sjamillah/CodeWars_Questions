function lovefunc(flower1, flower2) {
    /* Function checks if Timmy and Sarah are in love by returning true if one flower has 
    an even number of petals and the other has an odd number, otherwise returns false.*/
    if ((flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower2 % 2 === 0 && flower1 % 2 !== 0)) {
        return true;
    } else {
        return false;
    }
}
console.log(lovefunc(2, 4));
console.log(lovefunc(6, 11));