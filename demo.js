function noArgu(){
    console.log("This Function  with no argument");
}
noArgu();
function personalDetails(firstName,lastName,collegeName){
    console.log("This Function  with no argument" + firstName ,+lastName,+collegeName);
}
personalDetails("Sanket","Mahalle","PRMCEAM");
// function swapValue(v1,v2){
// console.log("Before Swap"+ v1,v2);
// var temp=v1;
// v1=v2;
// v2=temp;
// console.log("After Swap"+v1,v2);
// }
// swapValue(300 ,400);
// swapValue(2,4);
// swapValue(2,4);



const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const odds = [];

arr.forEach(number => {
  if (number % 2 !== 0) {
    odds.push(number);
  }
});

console.log(odds);


const numbers = [8, 19, 5, 6, 14, 9, 13];
const odds1 = [];

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 1) {
        odds1.push(element);
      }
}
console.log(`${odds1}`);


