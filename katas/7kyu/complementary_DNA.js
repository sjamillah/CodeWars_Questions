function dnaStrand(dna) {
    /*
    Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
    function receives one side of the DNA(string, except for Haskell) and returns the other complementary side
    'A'and 'T' are complements and the same as 'C' and 'G'
    */
   let complement = '';
   for(let i = 0; i < dna.length; i++) { //loops through the DNA array
    if(dna[i] === 'A') { //checks if the specific value is 'A' and then adds a complement 'T'
        complement += 'T';
    } else if (dna[i] === 'T') {
        complement += 'A';
    } else if (dna[i] === 'C') {
        complement += 'G';
    } else if (dna[i] === 'G') {
        complement += 'C';
    }
   }
   return complement;
}
console.log(dnaStrand("ATCG"));