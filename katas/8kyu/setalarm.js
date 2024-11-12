function setAlarm(employed, vacation) {
    /* function returns true if you're employed and not on vacation otherwise it returns false

    Expected return value
    employed | vacation 
    true     | true     => false
    true     | false    => true
    false    | true     => false
    false    | false    => false*/
    if(employed === true && vacation === false) {
        return true;
    } else {
        return false;
    }
}
console.log(setAlarm(false, true));
console.log(setAlarm(true, true));
console.log(setAlarm(true, false));
console.log(setAlarm(false, false));