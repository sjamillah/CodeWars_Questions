/*
I'm sure you know Google's "Did you mean ...?", when you entered a search term and mistyped a word. 
In this kata, we want to implement something similar.
You'll get an entered term (lowercase string) and an array of known words (also lowercase strings). 
Your task is to find out which word from the dictionary is most similar to the entered one. 
The similarity is described by the minimum number of letters you have to add, remove, or replace in 
order to get from the entered word to one of the dictionary words. The lower the number of required 
changes, the higher the similarity between each two words.
*/

function Dictionary(words) {
    // Constructor function for the Dictionary class
    // Stores the array of known words into the `words` property of the Dictionary object
    this.words = words;
}

Dictionary.prototype.findMostSimilar = function(term) {
    // Method to find the most similar word in the dictionary to the given `term`
    
    let closestWord = ''; // Initialize the closest word to an empty string
    let smallestDistance = Infinity; // Start with the largest possible distance (Infinity)

    // Loop through each word in the dictionary
    this.words.forEach(word => {
        const distance = theDistanceBetween(term, word); // Calculate the distance between `term` and the current `word`
        if (distance < smallestDistance) { // If this distance is smaller than the smallest distance found so far
            smallestDistance = distance; // Update the smallest distance
            closestWord = word; // Update the closest word
        }
    });

    return closestWord; // Return the word with the smallest distance
};

function theDistanceBetween(a, b) {
    // Function to calculate the "edit distance" (Levenshtein distance) between two words `a` and `b`
    
    const dp = Array.from({ length: a.length + 1 }, () =>
        Array(b.length + 1).fill(0)
    ); 
    // Create a 2D array (dp table) with dimensions (a.length + 1) x (b.length + 1) 
    // Each cell represents the cost to convert substrings of `a` to substrings of `b`
    
    for (let i = 0; i <= a.length; i++) {
        dp[i][0] = i; // Initialize the first column: cost of deleting all characters from `a`
    }
    for (let j = 0; j <= b.length; j++) {
        dp[0][j] = j; // Initialize the first row: cost of inserting all characters of `b`
    }

    // Fill the DP table using bottom-up approach
    for (let i = 1; i <= a.length; i++) { // Loop through all characters in `a`
        for (let j = 1; j <= b.length; j++) { // Loop through all characters in `b`
            const cost = a[i - 1] === b[j - 1] ? 0 : 1; // If characters match, cost is 0, otherwise it's 1
            
            dp[i][j] = Math.min(
                dp[i - 1][j] + 1,       // Cost of deletion (remove a character from `a`)
                dp[i][j - 1] + 1,       // Cost of insertion (add a character to `a`)
                dp[i - 1][j - 1] + cost // Cost of substitution (replace a character in `a`)
            );
        }
    }

    return dp[a.length][b.length]; // The edit distance is stored in the last cell of the DP table
}

// Create a Dictionary instance with a list of words
let fruits = new Dictionary(['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry']);
console.log(fruits.findMostSimilar('strawbery')); // Output: "strawberry" (corrects the typo)
console.log(fruits.findMostSimilar('berry'));     // Output: "cherry" (most similar word)

let things = new Dictionary(['stars', 'mars', 'wars', 'codec', 'codewars']);
console.log(things.findMostSimilar('coddwars'));  // Output: "codewars" (closest match)

let languages = new Dictionary(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']);
console.log(languages.findMostSimilar('heaven'));       // Output: "java" (most similar word)
console.log(languages.findMostSimilar('javascript'));   // Output: "javascript" (identical words are the most similar)
