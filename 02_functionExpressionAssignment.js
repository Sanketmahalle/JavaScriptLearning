console.log("1)");
var square = function (num) {
  console.log("Square of ", num, "=", num * num);
};

square(5);
square(6);
square(25);
square(100);
console.log("2)", typeof square);
console.log("=====================================");
console.log("3)");

var areaOfTrangle = function (b, h) {
  console.log("Base = 45 AND Height = 34 ");
  console.log("Area of Trangle = ", (b * h) / 2);
};
areaOfTrangle(45, 34);
console.log("=====================================");
console.log("4)");

var areaOfRectangle = function (w, l) {
  console.log("Length = 499 AND Width = 917 ");
  console.log("Area of Rectangle = ", l * w);
};
areaOfRectangle(917, 499);
console.log("=====================================");
console.log("5)");

var swap_values = function (arg1, arg2) {
  console.log("-------------Before Swap-------------");
  console.log(arg1, arg2);
  console.log("-------------After Swap-------------");
  var temp = arg1;
  arg1 = arg2;
  arg2 = temp;
  console.log(arg1, arg2);
};
swap_values("Virat", "Anushka");
swap_values("1000", "2000");
console.log("=====================================");
console.log("6)");
var data = "JavaScript the most populer language";
console.log("A) Total Character available in string = ", data.length);
console.log("B) Find the Character at index  6 = ", data.charAt(6));
console.log("C) Find the Character at index  11 = ", data.charAt(11));
console.log(
  "D) Find the last Character using length property  = ",
  data.charAt(data.length - 1)
);
console.log("E) Find the very first  Character   = ", data.charAt(data - 1));
console.log(
  "F) Find the length of given string and then calculate the square  of length \n",
  "*length of given string =",
  data.length
);
console.log(" *calculate the square  of length =", data.length * data.length);
