function noArgu(){
    console.log("1.");

console.log("Anguler Developer");

}
noArgu();
function noArgu2(){
    console.log("----------------------------");

console.log("This function is with no arguments");

}
noArgu2();
function personalDetails(firstName,lastName,collegeName){
    console.log("2.");

console.log("Personal Details");
console.log(firstName , lastName, collegeName);
}
personalDetails("Sanket","Mahalle","PRMCEAM");
console.log("==================================================");
console.log("3.");
function swapValuesDude(arg1,arg2) {
    
    console.log("-------------Before Swap-------------");
    console.log(arg1,arg2);
    console.log("-------------After Swap-------------");
    var temp=arg1;
    arg1=arg2;
    arg2=temp;
    console.log(arg1,arg2);

}
swapValuesDude("Virat","Anushka");
swapValuesDude("1000","2000");
console.log("==================================================");
console.log("4.");

function addThreeValues(v1,v2,v3) {
  console.log("Result: ",v1+v2+v3);  

}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning");