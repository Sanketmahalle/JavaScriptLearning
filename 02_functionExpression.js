var sub = function (n1,n2) {
    var result=n1-n2;
    console.log("sub",result);
    return result;
};
var result = sub(20,10);
console.log(result);


var square = function (num) {
    console.log("Square of ",num,"=", num*num);
}

square(5);
console.log(typeof square );