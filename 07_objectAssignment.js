class Vehicle {
   vhicleType;
   name;
   modelNo; 
   color;
   Brand;
    constructor(vhicleType,name,modelNo,color,Brand){
        this.vhicleType=vhicleType;
        this.name=name;
        this.modelNo=modelNo;
        this.color=color;
        this.Brand=Brand;
    }
}
let vehicle1  = new Vehicle("4 Wheeler","TataAlrtoz","Altroz Variants - XE","Golden","Tata");
let vehicle2  = new Vehicle("2 Wheeler","yamaha FZ","fz x","Black","yamaha");
let vehicle3  = new Vehicle("4 Wheeler","Baleno","1.2 Delta","Blue","Maruti Suzuki");
let vehicle4  = new Vehicle("4 Wheeler","Aura","1.2 s CNG ","Brown","Hyundai");
let vehicle5  = new Vehicle("4 Wheeler"," Creta","1.5 s Petrl SUV","Black","Hyundai");

console.log(vehicle1);
console.log(vehicle2);
console.log(vehicle3);
console.log(vehicle4);
console.log(vehicle5);


class College{

    Name;
    TotalBranch;
    City;
    NACCGrade;

    constructor(name,totalBranch,city,naccGrade){
this.NACCGrade=naccGrade;
this.Name=name;
this.City=city;
this.TotalBranch=totalBranch;
    }

    collegeDetails(){
        console.log("Name:",this.Name,"   City:",this.City,"   NACCGrade:",this.NACCGrade,"   TotalBranch:",this.TotalBranch);
    }
}
let college1 = new College("COEP",4,"pune","A+");
let college2 = new College("PRMCEAM",6,"Amravati","A+");
let college3 = new College("DY Patil",4,"pune","A+");
let college4 = new College("Pote",5,"Amravati","A");

function traverseObject(college4) {
    for (const key in college4) {
        if (Object.hasOwnProperty.call(college4, key)) {
            const element = college4[key];
            console.log(`${key}` , `${element}`);
        }
    }
}

college1.collegeDetails();
college2.collegeDetails();
college3.collegeDetails();
college4.collegeDetails();


let clg =new College("sdgsdh");




//Fibonacci sequence
console.log("===================Fibonacci sequence===================");
let data=[];
function fib(f) {
    let a=0 ,b=1,c;
    for (let index = 0; index < f; index++) {
            c=a+b;

         a=b;
         b=c;

           
            data.push(c)
    }
    console.log(data); 

    
}
fib(7);

//prime number

console.log("===================Prime Number===================");

function primeNumber(num) {
    // if(num<=1){
    //     console.log(`${num} is not a prime number.`);

    // } else{
    //     for (let index = 2; index < num; index++) {
if (num % 2 ==0) {
    console.log(`you entered ${num} which is not a prime number.`);
}else{
    console.log(`you entered ${num} which is  a prime number.`);
}            
        }
//     }
   
// }
primeNumber(13);





