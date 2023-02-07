let  Student={
name:"ABC",
age: 25,
rollNO:3,
address:{
    coloney:"Kothari nagar",
    city: "Amravati"
},
achivements:{

}

}

Student.achivements.certificate="PCB DeSIGN";
Student.achivements.cert2="ICT";
Student.achivements.cert3="Udemy";
delete Student.achivements.cert3;

console.log(Student.achivements);

let additem=Student.state="MAharashtra";
console.log(Student);
console.log(`Address:=>`,Student.name, );