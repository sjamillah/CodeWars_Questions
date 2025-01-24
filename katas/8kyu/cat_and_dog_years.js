var humanYearsCatYearsDogYears = function(humanYears) {
    /* 
    I have a cat and a dog.

    I got them at the same time as kitten/puppy. That was humanYears years ago.

    Return their respective ages now as [humanYears,catYears,dogYears]

    NOTES:

    humanYears >= 1
    humanYears are whole numbers only
    Cat Years
    15 cat years for first year
    +9 cat years for second year
    +4 cat years for each year after that
    Dog Years
    15 dog years for first year
    +9 dog years for second year
    +5 dog years for each year after that
    */

    // input: humanYears this determines the age of the cat and dog as they're puppy and kitten before
    // output: ages of the human, cat and dog
    let cat_years = 0;
    let dog_years = 0;
    if(humanYears >= 1) { 
        cat_years += 15;
        dog_years += 15;
      }
      if(humanYears >= 2) {
        cat_years += 9;
        dog_years += 9;
      }
      if(humanYears > 2) {
        //returns the cat and dog years and removes the first two
        cat_years += (humanYears - 2) * 4;
        dog_years += (humanYears - 2) * 5;
      }
    return [humanYears, cat_years, dog_years];
}
console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(2));
console.log(humanYearsCatYearsDogYears(10));