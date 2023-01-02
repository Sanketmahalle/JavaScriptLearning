//Shallow cloning
console.log(`=====Array Shallow cloning=====`);
var arr1 =[0,2,4,6,8];
var arr2 =["A","B","C","D","E"];

var result = [{},...arr1,...arr2];
console.log(result);

// arrEvenNo[0]=100;//duplicate update
// console.log(`arrEvenNo:`,arrEvenNo);
// console.log(`arrOfEven2:`,arrOfEven2);

// console.log(`arrEvenNo`,arrEvenNo);
// console.log(`arrOfNUM`,arrOfNUM);
// arrEvenNo[2]=10;
// console.log(`arrEvenNo`,arrEvenNo);
// console.log(`arrOfNUM`,arrOfNUM);


// //Deep cloning
// console.log(`=====Array Deep cloning=====`);
// let arr=[... arrEvenNo];
// console.log(arr);





