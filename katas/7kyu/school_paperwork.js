function paperwork(n, m) {
    /* function calculates the number of blank pages you need for a specific number of students(n) and the paperwork you need to copy(m)*/
    if(n >= 0 && m >= 0) {
        return n * m;
    } else {
        return 0;
    }
}
console.log(paperwork(5, 5));
console.log(paperwork(0, 6));
console.log(paperwork(-6, 8));
console.log(paperwork(8, -1));
console.log(paperwork(9, 56));