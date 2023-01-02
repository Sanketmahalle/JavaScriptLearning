var sevt=`string 1. "I AM Learning JavaScript, The Language of thr Internet"`;
console.log(sevt);
var count=0;

for (let index = 0; index < sevt.length; index++) {
   var char= sevt.charAt(index);
   var charCop= char.toLowerCase();
   if (charCop==`a`) {
    
    count=count+1;
   }
    
}
console.log(`total number characters "a" or "A" available in string 1 := ${count}`);
console.log(`====================================================================================A`);

var str2=`string 2."My favourite movie is LAggAn"`
console.log(str2);
var count=0;

for (let index = 0; index < str2.length; index++) {
   var char= str2.charAt(index);
   var charCop= char.toLowerCase();
   if (charCop==`a`) {
    
    count=count+1;
   }
    
}
console.log(`total number characters "a" or "A" available in string 2 := ${count}`);