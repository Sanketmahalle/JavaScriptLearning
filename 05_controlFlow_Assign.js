
var sevt="I am very good IT Developer";

var count=0;

for (let index = 0; index < sevt.length; index++) {
   var char= sevt.charAt(index);
   var charCop= char.toLowerCase();
   if (charCop==`a` || charCop==`e`||charCop==`i`||charCop==`o`||charCop==`u`) {
    
    count=count+1;
   }
    
}
console.log(`1. total vowels for string "I am very good IT Developer :=" ${count}`);
console.log(`=============================================================`);
console.log(`2. sum of cube of numbers from 1 to 5`);


function sumOfCube(params) {
    let sum =0;
    for (var index = 1; index <=params; index++) {
        
        sum=  index*index*index +sum;
       console.log(`${index}*${index}*${index} +`);
    }
    console.log(`= ${sum}`);
}
sumOfCube(5);




function oddPositionChar(params) {
   

   var remspace=params.replaceAll(" ","");
   console.log(remspace);

   for (var index = 0; index <=params.length; index++) {
   if (index%2!=0) {
    console.log(remspace[index]);
   }
   }
}
oddPositionChar(`Hard work always pays back`);

function oddPositionChar2(params) {
   

    var remspace=params.replaceAll(" ","");
    console.log(remspace);
 
    for (var index = 0; index <=params.length; index++) {
    if (index%2!=0) {
        
     console.log(remspace[index]);
    }
    }
 }
 console.log( oddPositionChar2(`Soon I will be Anguler IT Champ`))
;
 
