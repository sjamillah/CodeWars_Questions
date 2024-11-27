function isValidWalk(walk) {
    /*
    You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
    Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
    */
    if(walk.length !== 10) {
        return false;
    }
    //starting point of the individual starts from 0
    let count1 = 0;
    let count2 = 0;
    //use the logic of a plot diagram that uses both negative and positive numbers
    for(let char of walk) {
        if(char === 'n') {
            count1 ++; //one step forward from 0
        } if(char === 's') {
            count1 --; //one step backwards to 0
        } if(char === 'e') {
            count2++; //one step rightwards from 0
        } if(char === 'w') {
            count2--; //one step backwards to 0
        }
    }
    return count1 === 0 && count2 === 0; //returns true if you're back where you started from i.e 0
}
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])); //true if you're back where you started from
console.log(isValidWalk(['w','e','w','e','w','e','w','e', 'w', 'e', 'w', 'e'])); //too long returns false
console.log(isValidWalk(['w'])); //too short returns false
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); //doesn't bring you to the start false