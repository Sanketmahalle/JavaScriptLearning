console.log("Assignment1 \n 1.Find the greatest number amongst two numbers.");

var greatestNumber=function (Number1,Number2) {
    
    var result = Number1>Number2 ? `Greatest number batween "${Number1}" and "${Number2}" is: "${Number1}"`:`Greatest number batween "${Number1}" and "${Number2}" is: "${Number2}"` ;
console.log(result);
}
greatestNumber(10,-10);
greatestNumber(800,899);


console.log("--------------------------------------------");
console.log("2. Check number is EVEN or ODD.");
var isEvenOROdd=function(value)  {

  var ans= value%2==0 ? `Number is EVEN`:`number is ODD`;
  return ans;
}
console.log(`Number is 29 ans its ${isEvenOROdd(29)} number.`);
console.log(`Number is 44 ans its ${isEvenOROdd(44)} number.`);
console.log(`Number is 0 ans its ${isEvenOROdd(0)} number.`);
console.log(`Number is 101 ans its ${isEvenOROdd(101)} number.`);

console.log("--------------------------------------------");
console.log(`3.which word has even or odd length "JavaScript","developer","Google"`);

var isEvenOeOddLength=function (input) {
    var len = input.length;
  var r=  len%2==0 ? "EVEN" : "ODD";
  return r;
}
console.log(`Length of the "JavaScript" word is ${"JavaScript".length} which ${isEvenOeOddLength("JavaScript")}`);
console.log(`Length of the "developer" word is ${"developer".length} which ${isEvenOeOddLength("developer")}`);
console.log(`Length of the "Google" word is ${"Google".length} which ${isEvenOeOddLength("Google")}`);


