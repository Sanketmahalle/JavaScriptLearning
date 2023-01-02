let empsunny={
    name:"sunny",
    age:25

}

let empsanket={
    name:"samket",
    age:28

}
console.log({...empsunny});
let empMohtit={...empsanket};//deep cloning using(... //spread)
console.log(empMohtit);
empMohtit.name="mohit";

console.log(empMohtit);
console.log(empsanket);

//using JSON.stringfy

const profBill = {
    name: "Billgates",
    contact: 7045789631,
    age: 45,
    degrees:{
        engineering:"CSC",
        PHD:"Adv Computing",
        MBA:"Finance",
        
    }
    
  }

  let empM=JSON.parse(JSON.stringify(profBill));
empM.name="m";
empM.degrees.MBA="HR";
console.log(profBill.degrees.MBA);
console.log(empM.degrees.MBA);
