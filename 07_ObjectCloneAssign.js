const arrayNums=[20,3,4,56,90,400,49];
console.log(`Output1. Shallow Cloning `);
console.log(`Given array: ${arrayNums}`);
let clonedArray=arrayNums;
clonedArray.push(55,66);
console.log(`Original array: `,arrayNums);
console.log(`Cloned array array: `,clonedArray);

console.log(`------------------------------------------------------------------------------`);

console.log(`Output2. Deep Cloning using spread operator `);
const arrayNums1=[20,3,4,56,90,400,49];
console.log(`Given array: ${arrayNums1}`);
let deepclonedArray=[...arrayNums1];
arrayNums1.push(10,25);
console.log(`Cloned array array: `,deepclonedArray);
console.log(`Original array: `,arrayNums1);

console.log(`------------------------------------------------------------------------------`);

console.log(`Output3. Merge or concat using spread operator `);
const arrayEven=[2,30,14,8];
let combinedarray= [...arrayNums,...arrayEven]
console.log(`Merge result of "arrayNums" and "arrayEven" : ${combinedarray}`);

console.log(`------------------------------------------------------------------------------`);

console.log(`Output4.`);

const employee_info={
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,000INR",
        aug_month: "50,000INR",
        jun_month: "65,000INR"
    },
    address:{
        locality:{
            colony: "OM Vrindavan Society ",
            street: " Kanch Pokli, 431202",
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobiles: ["+91 8600 3456 88 ", " 1800-4567 32 "," +91- 9096 5678 77 "]
}
console.log(`employee_info created`,employee_info);
console.log(`------------------------------------------------------------------------------`);

// var data=[employee_info.address.city,employee_info.address.state,employee_info.address.country];
// var loc=[employee_info.address.country,employee_info.address.street];
console.log(`Output5. Log employee details `);

console.log(`a. ${employee_info.address.locality.colony}, ${employee_info.address.locality.street}, ${employee_info.address.city}, ${employee_info.address.state}, ${employee_info.address.country}`);


console.log(`b. ${employee_info.mobiles}`);
console.log(`------------------------------------------------------------------------------`);

console.log(`Output6. Deep cloning by using JSON.stringfy()}`);

let newArray=JSON.parse(JSON.stringify(employee_info));
console.log(`a. Original Salaty of  july_month ${newArray.salary.july_month} `);

newArray.salary.july_month="80,000INR";

console.log(`a. Update Salary of july_month ${newArray.salary.july_month} `);
console.log(newArray.salary);
console.log(`------ ------- ------ ------ ------------`);

console.log(`b. Before update  country name :  ${employee_info.address.country} `);

newArray.address.country="United Kingdom";
console.log(`b. after update  country name :  ${newArray.address.country} `);
console.log(newArray.address);



