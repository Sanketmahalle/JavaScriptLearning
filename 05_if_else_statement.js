// console.log(`Boomm boom`);

// var isRoadBlocked = true;

// if (isRoadBlocked==false) {
//     console.log(`Traveling thru express way`);

// } else {
//     console.log(`Traveling thru tunnel`);
// }

console.log("1. Ckeck person is eligible for vote or not.");

var eligibleForVote = function (ageValue) {
  if (ageValue <= 0 || ageValue >= 120) {
    return `${ageValue} Invalid data.`;
  } else {
    console.log(`valid data`);
    if (ageValue >= 18) {
      console.log(`Congo you can vote........`);
    } else {
      console.log(`sorry you are not able to vote`);
    }
  }
};
eligibleForVote(230);
eligibleForVote(-17);
eligibleForVote(0);
eligibleForVote(20);
// console.log(eligibleForVote(-10));
// console.log(eligibleForVote(200));
// console.log(eligibleForVote(0));

// var muNumber =20;
// if (muNumber%2==0) {
//     console.log(`${muNumber} its even number`);
// } else {
//     console.log(`its odd number`);
// }

function isEvenOrOdd(num) {
  if (typeof num == "number") {
    console.log(`valid num`);
  } else {
    console.log(`invalid num`);
  }
  if (num%2===0) {
      console.log(`${num} its even number`);
  } else {
      console.log(`its odd number`);
  }
}
isEvenOrOdd(`10`);
