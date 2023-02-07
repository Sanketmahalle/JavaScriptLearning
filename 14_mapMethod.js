console.log("map() is used to transform the value");
const array = [0, 2, 5, 6];

const arrayTransform = array.map((currentValue) => {
  return currentValue + 10;
});
console.log(arrayTransform);

const arrayOfSquare = array.map((currentval) => currentval * currentval);
console.log(arrayOfSquare);

 //0 3 7 9 12 15 add  value plus index
const DAta = [0, 2, 5, 6, 8, 10];
const valueIndex = DAta.map((value, index) => {
  return value + index;
});
console.log(valueIndex);
