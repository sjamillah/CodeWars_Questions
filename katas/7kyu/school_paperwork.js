function paperwork(n, m) {
    /* function calculates the number of blank pages you need for a specific number of students(n) and the paperwork you need to copy(m)*/
    if(n >= 0 && m >= 0) {
        return n * m;
    } else {
        return 0;
    }
}