function nbDig(n, d) {
    /* 
    Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
    Square all numbers k (0 <= k <= n) between 0 and n.
    Count the numbers of digits d used in the writing of all the k**2.
    Implement the function taking n and d as parameters and returning this count.

    Example:
    n = 10, d = 1 
    the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
    We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

    The function, when given n = 25 and d = 1 as argument, should return 11 since
    the k*k that contain the digit 1 are:
    1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
    So there are 11 digits 1 for the squares of numbers between 0 and 25.
    */
    let count = 0
    let s = Array.from({ length: n + 1 }, (_, i) => i)
    let squArr = s.map(el => Math.pow(el, 2))
    squArr.forEach(char => {
        count += char.toString().split('').filter(num => num === d.toString()).length
    });
    return count
}
console.log(nbDig(20, 1))
console.log(nbDig(5750, 0))