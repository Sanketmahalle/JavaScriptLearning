console.log("1. Ckeck number is Even or Odd");

 function evenOrOdd(value) {
    if (value%2==0) {
        return ` ${value} is Even Number`;
    }

    if (value%2!=0) {
        return ` ${value} is Odd Number`;
    }
    
}
console.log(evenOrOdd(45));
console.log(evenOrOdd(70));
console.log(evenOrOdd(67));
console.log(evenOrOdd(98));

console.log("-----------------------------------------------");
console.log("2. Ckeck person is eligible for vote or not.");

function eligibleForVote(value) {
    if (value>=18) {
        return ` ${value} age of this person is eligible for vote`;
    }

    if (value<18) {
        return ` ${value} age of this person is not eligible for vote`;
    }
    
}
console.log(eligibleForVote(18));
console.log(eligibleForVote(20));
console.log(eligibleForVote(17));
console.log(eligibleForVote(40));

console.log("-----------------------------------------------");
console.log("3. Ckeck string contains more than 10 charecters or not.");

function checkCharecter(value) {
    var result= value.length;
    if (result>10) {
        
        return ` "${value}" string contains more than 10 charecters`;
    }

    if (value<18) {
        return ` ${value} age of this person is not eligible for vote`;
    }
    
}
console.log(checkCharecter("JavaScript-ES6"));

console.log("-----------------------------------------------");
console.log(`4. Ckeck string starts with "Java"`);

function string(value) {
    
    if (value.startsWith("Java")) {
        
        return ` "${value}" given string starts with "JAVA"`;
    }

    if (value.startsWith("Java")) {
        return ` "${value}" given string not starts with "JAVA"`;
    }
    
}
console.log(string("JavaScript Language"));
