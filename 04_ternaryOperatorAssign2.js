console.log("Assignment 2");
console.log("1)Male is eligible for Marrage or Not");
function maleMarriageEligiblity(gender,age,boyName) {
    var result= (gender=="Male" && age>=21) ? `Hay ${boyName} you are eligible for Marrage`: `Hay ${boyName} you are Not eligible for Marrage`;
    return result;
}
console.log(`${maleMarriageEligiblity("Male",25,"Billgates")}`);
console.log(`${maleMarriageEligiblity("Male",1179,"Stew Jobs")}`);

console.log("-------------------------------------------------------");
console.log("1)Female is eligible for Marrage or Not");
function FemaleMarriageEligiblity(gender,age,girlName) {
    var result= (gender=="Female" && age>=18) ? `Hay ${girlName} you are eligible for Marrage`: `Hay ${girlName} you are Not eligible for Marrage`;
    return result;
}
console.log(`${FemaleMarriageEligiblity("Female",16,"Jenifer")}`);
console.log(`${FemaleMarriageEligiblity("Female",27,"Malinda Gates")}`);