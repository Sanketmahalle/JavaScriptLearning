let fruits_sesonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`given fruits_sesonal array list is:= ${fruits_sesonal}`);
console.log(`---------------------------------------------------------------------------------------`);

console.log(`1. The First element of array is "${fruits_sesonal[0]}" and Last elemrnt of array is "${fruits_sesonal[4]}"`);//1st and last eemrnt
console.log(`---------------------------------------------------------------------------------------`);

fruits_sesonal.unshift(`Papaya`);//add element at 1st index by usning unshift()
console.log(`2. Array after Adding Papaya:=  ${fruits_sesonal}`);
console.log(`---------------------------------------------------------------------------------------`);

//Remove element
let remElement=fruits_sesonal.splice(4,1);
console.log(`3. Remove "Mango" from array:= ${fruits_sesonal}`);

//Add elemrnt at last
console.log(`---------------------------------------------------------------------------------------`);

fruits_sesonal.push("Pineapple");
console.log(`4. Add "Pineapple" at last := ${fruits_sesonal}`);
console.log(`---------------------------------------------------------------------------------------`);

//Add elemrnt  before water melon
fruits_sesonal.splice(4,0,"Dragon fruit");
console.log(`5. insert an element before "Water Melon":=  ${fruits_sesonal}`);
console.log(`---------------------------------------------------------------------------------------`);

//replace element
fruits_sesonal.splice(2,1,"Kiwi");
console.log(`6. replace element "Orange" with "Kiwi":=  ${fruits_sesonal}`);
console.log(`---------------------------------------------------------------------------------------`);

//log from 1 to4
let sliceelement=fruits_sesonal.slice(1,4);
console.log(`7. Log element starting from index 1 to 4:=  ${sliceelement}`);
console.log(`---------------------------------------------------------------------------------------`);

//log last 3 element
let last3=fruits_sesonal.slice(fruits_sesonal.length-3);
console.log(`8.Only select last 3 element and log using Lenth Property:=  ${last3}`);



