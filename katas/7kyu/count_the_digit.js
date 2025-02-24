function nbDig(n, d) {
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