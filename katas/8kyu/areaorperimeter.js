const areaOrPerimeter = function(l, w) {
    /*function expression that returns area if it is a square and returns perimeter if it is a rectangle*/
    if(l === w) {
        let area = l * w;
        return area;
    } else {
        let perimeter = 2 * (l + w);
        return perimeter;
    }
};
console.log(areaOrPerimeter(4, 5));
console.log(areaOrPerimeter(7, 7));