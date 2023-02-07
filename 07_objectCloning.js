//deep conling
let details={
    NAME:"A",
    SURNAME:"B"
}

let details2={

}

details2=details;//deep
console.log("details",details);
console.log("details2",details2);

details2.NAME="Z";
console.log("details2",details2);
console.log(details);


let empsunny={
    name:"sunny",
    age:25

}

let empsanket={
    name:"sanket",
    age:28

}


console.log({...empsunny});

let empMohtit= {...empsanket};//deep cloning using(... //spread)


console.log(empMohtit);

empMohtit.name="mohit";

console.log(empMohtit);
console.log(empsanket);

 let originalArray1= [1,2 ,3,4,5,6];
 var cloneArray=[];
 var cloneArray={...originalArray1};//deep
 console.log(originalArray1);
 console.log(cloneArray);

 cloneArray[0]= 9;
 console.log(cloneArray);
 console.log(originalArray1);
//using JSON.stringfy

const profBill = {
    name: "Billgates",
    contact: 7045789631,
    age: 45,


    degrees:{
        name:"abc",
        engineering:"CSC",
        PHD:"Adv Computing",
        MBA:"Finance",
        
    }
    
  }

  let empM=JSON.parse(JSON.stringify(profBill));

  //var x=JSON.parse(JSON.stringify(profBill));


empM.degrees.name="xyz";

console.log(profBill.degrees.name);
console.log(empM.degrees.name);
