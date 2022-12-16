
var stringHandsOn=function () {
    var givenString =("     Hey you are doing good, keep it up     ") ;
console.log("1.",givenString);
   console.log("2. Length of the string is: " , givenString.length ); 
   var trimString=(givenString.trim());
console.log("3. After reming the leading and trailing extrs spaces: ",`${trimString}`);
   console.log("4. Total number extra spaces count that is removes in step 3: " , givenString.length-trimString.length );
   console.log(`5. First and last character after trim:","first charactre is "${trimString.charAt(0)}" and last charactre is "${trimString.charAt(trimString.length-1)}"  `); 
   console.log("6. Count of total words available in the string after step 3: " , trimString.length ); 
   console.log(`7. Index of word "good" from the given string: ${trimString.indexOf("good")}`);
   console.log(`8. print the substring starting from index 22,using substring()=> " ${trimString.slice(22)}" and slice()=> "${trimString.substring(22)}"`);
   console.log(`9. Is string ends with word "up" after step 3:  ${trimString.endsWith("up")}`);
   console.log(`10. Is string starts with word "Hey" after trimming:  ${trimString.startsWith("Hey")}`);

}
stringHandsOn();