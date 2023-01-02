// let array=[1,2,3,[1,2,3,5,"rd"]];

// let totalElement= array.length;
// let type =typeof array; //type of array

// console.log(type);
// console.log("==========Access array=============");
// let elementposition=array[2];
// //update value
// let update=array[2]=600;
// console.log(update);

// // for (let index = 0; index < array.length; index++) {
// //     const element = array[index];
// //     console.log(element);
// // }

// ///////////////////even index value
// for (let index = 0; index < array.length; index++) {
//     if (index%2==0) {
//         const element = array[index];
//     console.log(element);
//     }
// }

// let arrayOfSal =[4,5,4,8,7]
// console.log(arrayOfSal);
// arrayOfSal.push(7);//PUSH for add element in array
// console.log(arrayOfSal);
// arrayOfSal.unshift(55);//add element at start position
// console.log(arrayOfSal);

// //arrayOfSal[0]=20000;//update array

// let arrayOfNumbers = [5, 10, 4, 6, 7, 10, 10]; // Empty Array
// console.log(arrayOfNumbers);

// console.log(`===== Total number of elements available in array ====`);
// let totalElements = arrayOfNumbers.length;
// console.log(`Total Elements in arrayOfNumbers --> ${totalElements}`);

// let typeOfArray =typeof arrayOfNumbers;
// console.log(`Type of array - arrayOfNumbers --> ${typeOfArray}`);

// console.log(`=== Accessing array elements===`);
// let elementAtZeroIndex = arrayOfNumbers[0];
// console.log(`Element at Zero Index : ${elementAtZeroIndex}`);
// console.log(`Element at Fifth Index : ${arrayOfNumbers[4]}`);

// console.log(`Last Element : ${totalElements-1}`);

// console.log(`When provided value is greater than length : ${arrayOfNumbers[9]}`);

// arrayOfNumbers[2] = 100; // Update or Modify value using index
// console.log(arrayOfNumbers);

// let indexOf7 = arrayOfNumbers.indexOf(7);
// console.log(`Index of element 7 --> ${indexOf7}`);

// let indexOf10 = arrayOfNumbers.indexOf(10);
// console.log(`Index of element 7 --> ${indexOf10}`);

// console.log(`Traversing array using for loop in Reverse order`);
// // initialization   condition  update
// let lastIndex = arrayOfNumbers.length-1;
// for (let index = lastIndex; index > 0; index--) {
//     const element = arrayOfNumbers[index];
//     // console.log(element);
// }

// // Array of salaries
// console.log(`Accessing salary of each employee`);
// let arrayOfSalaries = [10000, 20000, 30000, 20000, 40000];
// let sumOfSal = 0;// 30000
// for (let index = 0; index < arrayOfSalaries.length; index++) {
//     const element = arrayOfSalaries[index];// 10000 20000 30000
//     sumOfSal = sumOfSal+element;
// }
// console.log(`Total Salary of all employee is : ${sumOfSal}`);

// console.log(`======== unshift() methods=========`);
// var arrayOfNum = [4, 5, 6, 8, 9, 1];
// console.log(arrayOfNum);
// arrayOfNum.unshift(77);
// arrayOfNum.unshift(99, 111, 333);
// console.log(arrayOfNum);

// console.log(`======== pop() methods=========`);
// var arrayOfNum = [4, 5, 6, 8, 9, 33];
// let popResult = arrayOfNum.pop();
// console.log(popResult);
// console.log(arrayOfNum);

// console.log(`======== shift() methods=========`);
// var arrayOfNum = [4, 5, 6, 8, 9, 33];
// let shiftResult = arrayOfNum.shift(3);
// console.log(shiftResult);
// console.log(arrayOfNum);

console.log(`======== slice() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let sliceResult = arrayOfNum.slice(3);
let sliceRes = arrayOfNum.slice(2, 5);
console.log(arrayOfNum);
console.log(sliceResult);
console.log(sliceRes);

console.log(`======== for of loop ==========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
for (const element of arrayOfNum) {
    console.log(element);
}

console.log(`======== splice() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
let spliceResult = arrayOfNum.splice(3);
console.log(`After using splice(3) method `);
console.log("Array after deleting elements ", arrayOfNum);
console.log("Total deleted elements: ", spliceResult);

var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
let spliceRes = arrayOfNum.splice(2, 3);
console.log(`After using splice(2, 3) method `);
console.log("Array after deleting elements ", arrayOfNum);
console.log("Total deleted elements: ", spliceRes);

console.log("====== Inserting element in the array =======");
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
arrayOfNum.splice(2, 0, 88);
console.log(arrayOfNum);
arrayOfNum.splice(1, 0, 55, 99, 22);
console.log(arrayOfNum);

console.log("====== Replacing element in the array =======");
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
arrayOfNum.splice(3, 1, 22);
console.log(arrayOfNum);
console.log("====== Replacing element in the array when splice(2, 3, 99, 77 ) =======");
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
arrayOfNum.splice(2, 3, 99, 77 );
console.log(arrayOfNum);

console.log("==========include() ========");
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let isAvailable =  arrayOfNum.includes(9);
console.log(isAvailable);

console.log("==========Concat() ========");
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
var arrayOf1 = ["s", "g", "j", "r", "i", "w", "p", "v"];
const concatResult = arrayOfNum.concat(arrayOf1);
console.log(concatResult);

console.log("==========resize() ========");
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum.length);
arrayOfNum.length = 5;
console.log(arrayOfNum);
