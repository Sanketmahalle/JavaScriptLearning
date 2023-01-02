const car={
    carName:"Creta SX",
    company: "Hundai",
    launchYear:2017
}

const carEngine={
    enginePower: "1499CC",
    maxPower:"113 BHP" 
}

var res=Object.assign(car,carEngine)
console.log(`Output of "car" and "carEngine" object using .assign()`);
console.log(res);


console.log(`Output of "car" and "carEngine" object using Spread operator`);
var res1={...car,...carEngine}
console.log(res1);