const sumStr = ((a,b) => {
    // input: 2 integers as strings
    // output: sum of the integers
    let res = Number(a) + Number(b);
    return String(res);
});
console.log(sumStr('9', '4'));
console.log(sumStr('78', '9'));