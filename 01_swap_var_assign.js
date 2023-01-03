console.log("*Assignment Swap Two Variable*");

var sweety = "Sweety";
var cutie = "Cutie";
console.log("--------Before Swap--------");
console.log(sweety, cutie);
var temp = sweety;
sweety = cutie;
cutie = temp;
console.log("--------After Swap--------");
console.log(sweety, cutie);
console.log("=====================================");
console.log("*Assignment Swap Three values*");
var num1 = 100;
var num2 = 200;
var num3 = 300;
console.log("--------Before Swap--------");
console.log("num1", "num2", "num3");
console.log(num1, " " + num2, " " + num3);

var temp1 = num1;
var temp2 = num3;

console.log("--------After Swap--------");

num1 = num2;
num2 = temp2;
num3 = temp1;

console.log("num1", "num2", "num3");
console.log(num1, " " + num2, " " + num3);
