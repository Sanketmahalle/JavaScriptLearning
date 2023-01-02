var sevt="Yes Just do it man, I know you can ";

var count=0;

for (let index = 0; index < sevt.length; index++) {
   var char= sevt.charAt(index);
   var charCop= char.toLowerCase();
   if (charCop==`a` || charCop==`e`||charCop==`i`||charCop==`o`||charCop==`u`) {
    console.log(char);
    count=count+1;
   }
    
}
console.log(`total vowels ${count}`);

///////////////////////////////reverse this

var rev="Yes Just do it man, I know you can ";
var reverseString="";
var i=rev.length-1;
for (let index = i ; index >=0; index--) {
    
    var a=rev.charAt(index);
    if (a!=='') {
        reverseString=reverseString.concat(a);
    }
    
    console.log(a);
}
console.log(reverseString);

var i=1;
while (i<=1000) {
    console.log(5);
    i++
}

// 