function areYouPlayingBanjo(name) {
    // Create a function which answers the question "Are you playing banjo?".
    // If your name starts with the letter "R" or lower case "r", you are playing banjo!
    // The function takes a name as its only argument, and returns one of the following strings:
    // name + " plays banjo" 
    // name + " does not play banjo"
    // Names given are always valid strings.
    if(name[0].toLowerCase() === 'r') {
        //checks if the first character is r even if it is R it's first changed to lowercase
        return `${name} plays banjo`;
    } else {
        return `${name} does not play banjo`;
    }
}
console.log(areYouPlayingBanjo("Paul"));
console.log(areYouPlayingBanjo("Ringo"));
console.log(areYouPlayingBanjo("bravo"));
console.log(areYouPlayingBanjo("rolf"));