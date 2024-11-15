function findNeedle(haystack) {
    /* takes an array full of junk(haystack) but containing one needle and outputs "found the needle at position (at the index of the element)"*/
    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] === "needle") {
            return `found the needle at position ${i}`;
        }
    }
}
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));