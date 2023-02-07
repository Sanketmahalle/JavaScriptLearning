let person={
    name:"s",
    pincode:444709

}

// let n=person.name;
// let p=person.pincode;

let{name,pincode}=person;//Object Destructuring
console.log(name,pincode);

let arrayCompany =["TCS","infosis","google","Meta"];

            let[c1,c2,c3,c4,c5="fb"]=arrayCompany;//Array Destructuring
            console.log(c1,c2,c2,c4,c5);

//self invoking funcion
            (function show() {
                console.log("I am self invoking funcion");
            }
              ) ();
