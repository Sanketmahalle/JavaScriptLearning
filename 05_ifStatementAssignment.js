console.log("1. Ckeck person is eligible for vote or not.");

var eligibleForVote=function (ageValue) {
  if (ageValue >= 18 && ageValue <= 119) {
    return `${ageValue} age of this person is eligible for vote.`;
  }
  if (ageValue == 0 || ageValue <= 0 || ageValue >= 120) {
    return `${ageValue} is invalid data.`;
  }
  if (ageValue > 1 || ageValue < 18) {
    return `${ageValue} age of this person is not eligible for vote.`;
  }
}
console.log(eligibleForVote(45));
console.log(eligibleForVote(17));
console.log(eligibleForVote(8));
console.log(eligibleForVote(20));
console.log(eligibleForVote(-10));
console.log(eligibleForVote(200));
console.log(eligibleForVote(0));

console.log("2. -------------Grade system-------------");
console.log("2. Grade System.");

var gradeCalculation =function (marks) {

    
    if (marks>=90 && marks<100) {
        console.log(`Funtastic marks: ${marks} , your grade is A+.`);
    }
    if (marks>=75 && marks<90) {
        console.log(`Excellent marks; ${marks} , your grade is 'A'.`);
    }
    if (marks>=50 && marks<75) {
        console.log(`Good marks: ${marks} , your grade is 'B'.`);
    }
    if (marks>=35 && marks<50) {
        console.log(`marks ${marks} , your grade is 'C', Need improvement.`);
    }
    if (marks<=0 || marks>100 ) {
        console.log(`${marks} Please provide the valid marks.`);
    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);



