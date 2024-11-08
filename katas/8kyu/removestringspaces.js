function noSpace(x){
    // removes all whitespaces in a string
    let str = x.replace(/\s+/g, ''); 
    // '\s' matches any whitespace characters(spaces, tabs, newlines),
    //'+' indicates one or more occurrences of whitespaces
    // 'g' is a flag meaning 'global' so it replaces all matches.
    return str;
}