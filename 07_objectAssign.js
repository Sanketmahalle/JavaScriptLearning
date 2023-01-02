const professor = {
    name: "Billgates",
    contact: 7045789631,
    age: 45,
    degrees:{
        engineering:"CSC",
        PHD:"Adv Computing",
        MBA:"Finance",
        conDegree: function () {
       return concat(this.engineering,this.PHD,this.MBA);
        }
    },
    certificates:{
        HackerRAnk:"Participation",
        BusinesCompetition:"Winner"
    }
    
  }
console.log(`Professor Details:`);
  console.log(professor);
  console.log(`-------------------------------------------------------`);

  console.log(`Add Nested Object "degrees"`);
  console.log(professor.degrees);
  console.log(`-------------------------------------------------------`);

  console.log(`Add Nested Object "certificates"`);
  console.log(professor.certificates);
  console.log(`-------------------------------------------------------`);

  