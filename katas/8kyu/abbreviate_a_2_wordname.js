function abbrevName(name) {
    /*abbreviates a name with the first letter as initials and puts a dot in the middle*/
    let sStr = name.split(' ');
    let firstInitial = sStr[0].charAt(0).toUpperCase();
    let secondInitial = sStr[1].charAt(0).toUpperCase();
    return firstInitial + "." + secondInitial;
}
console.log(abbrevName("Sam Harris"));
console.log(abbrevName("patrick feeney"));