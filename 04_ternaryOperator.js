//if ssc_marks greater than equal to 35 then pass or fail

// var sscMarks = 30;
// var result = sscMarks>=35 ? "pass" : "false";
// console.log(`result is ${result}`);

var sscResult = function (sscMarks) {
    
    var result = sscMarks>=35 && !sscMarks>100 ? "pass" : "false";
return result;
}
console.log(`result is 23 :${sscResult(23)}`);
console.log(`result is 1200: ${sscResult(65)}`);
console.log(`result is -10: ${sscResult(-10)}`);

var num1 = 10;
var num2 = "10";


var r= num1==num2? "true" : "false" ;
console.log(r);
// for gender male check marriage eligibility with value age =23