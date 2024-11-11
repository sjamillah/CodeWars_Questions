function getGrade (s1, s2, s3) {
    /*computes the average of three scores and returns the corresponding letter grade based on a defined grading scale.*/
    let sum = s1 + s2 + s3;
    let score = sum / 3;
    if (score <= 100 && score >= 90) {
      return 'A';
    } else if (score < 90 && score >= 80) {
      return 'B';
    } else if (score < 80 && score >= 70) {
      return 'C';
    } else if (score < 70 && score >= 60) {
      return 'D';
    } else {
      return 'F';
    }
}
console.log(getGrade(12, 78, 89));
console.log(getGrade(90, 87, 90));