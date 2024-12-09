function bouncingBall(h, bounce, window) {
    /*
    Question: 
    A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

    He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

    His mother looks out of a window 1.5 meters from the ground.

    How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?

    Three conditions must be met for a valid experiment:
    Float parameter "h" in meters must be greater than 0
    Float parameter "bounce" must be greater than 0 and less than 1
    Float parameter "window" must be less than h.
    If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

    Note:
    The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

    Examples:
    - h = 3, bounce = 0.66, window = 1.5, result is 3

    - h = 3, bounce = 1, window = 1.5, result is -1 

    (Condition 2) not fulfilled).
    Step by step:
    h height of the building and must be greater than 0
    bounce number of times a ball bounces from the height it was thrown and must be greater than 0 and less than 1
    window is the height the mother when she looks out from the ground must be less than h
    determine how many times the mother will see the ball pass infront of her window 
    */
    let result = 0;
    if(h > 0 && bounce > 0 && bounce < 1 && window < h) {
        while(h > window) {
            result++; //number of times the ball falls down and passes the window of the mother
            h *= bounce;//when the ball bounces back up the bounces will be muliplied by the height of the building to determine the new height of the bounce
            if(h > window) {
                //if it bounces high enough to pass the window again it'll increment
                result++;
            }
        }
        return result;
    } else {
        //return -1 if the input is invalid
        return -1;
    }
}
console.log(bouncingBall(3, 0.66, 1.5)); //3
console.log(bouncingBall(3, 1, 1.5)); //-1
console.log(bouncingBall(30, 0.66, 1.5)); //15