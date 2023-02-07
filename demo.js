

//logic behind paldrome
var str=1;


var strleng=str.length;

for (let index = 0; i< strleng/2; index++) {
    if (srr[i] == srt[strleng-1 -index]) {
     console.log();   
    }else{[
        console.log()
    ]}
    
}



//1 2 3 2 1


















// function noArgu(){
//     console.log("This Function  with no argument");
// }
// noArgu();
// function personalDetails(firstName,lastName,collegeName){
//     console.log("This Function  with no argument" + firstName ,+lastName,+collegeName);
// }
// personalDetails("Sanket","Mahalle","PRMCEAM");
// // function swapValue(v1,v2){
// // console.log("Before Swap"+ v1,v2);
// // var temp=v1;
// // v1=v2;
// // v2=temp;
// // console.log("After Swap"+v1,v2);
// // }
// // swapValue(300 ,400);
// // swapValue(2,4);
// // swapValue(2,4);



// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const odds = [];

// arr.forEach(number => {
//   if (number % 2 !== 0) {
//     odds.push(number);
//   }
// });

// console.log(odds);


// const numbers = [8, 19, 5, 6, 14, 9, 13];
// const odds1 = [];

// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     if (element % 2 === 1) {
//         odds1.push(element);
//       }
// }
// console.log(`${odds1}`);

function validatePalin(str) {  
  
    // get the total length of the words  
    const len = str.length;  
  
    // Use for loop to divide the words into 2 half  
    for (let i = 0; i < len / 2; i++) {  
  
        // validate the first and last characters are same  
        if (str[i] !== str[len - 1 - i]) { 
            console.log('It is not a palindrome'); 
            
        }  else{
            console.log('It is a palindrome');
        }
    }  
  
}  
validatePalin("dads")
  
// accept the string or number from the prompt  
 
  
//console.log(value);  