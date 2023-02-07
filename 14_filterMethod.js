const DAta = [0, 2, 5, 6, 8, 10];

const result = DAta.filter((currentValue)=>{
return currentValue>5;
});
console.log(result);

const resultEven = DAta.filter((currentValue)=>{//Even number
    return currentValue%2==0;
    });
    console.log(`Even Number`,resultEven);

    class Employee {

        constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        
        this.emp_id=emp_id;
        
        this.emp_name = emp_name;
        
        this.emp_dept = emp_dept;
        
        this.emp_salary = emp_salary;
        
        this.emp_company = emp_company;
        
        } 
    }
    
        
        const emp_anil = new Employee (22, "Anil", "IT", 50000, "TCS");
        
        const emp_radha = new Employee (33, "Radha", "HR", 74000, "Wipro");
        
        const emp_rishi = new Employee (55, "Rishi", "Finance", 47000, "TCS");
        
        const emp_sonali = new Employee (66, "Sonali", "Finance", 45000, "Infy");
        
        const emp_monika = new Employee (77, "Monika", "IT", 40000, "Wipro");
        
        const emp_viny = new Employee (88, "Vinayak", "IT", 75000, "TCS");
        
        const emp_mahi = new Employee (99, "Mahesh", "HR", 85000, "Infy");


        var array_emps=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`=================Assignment by using filter()=================`);
   const result1= array_emps.filter((etailsmpDe)=>{
    return etailsmpDe.emp_company=="Wipro";
    });
    result1.forEach(element => {
        console.log(`Company Name: `,element.emp_company,`  Employee Name: `,element.emp_name);
    });




    console.log(`=================Employee from 'Wipro'=================`);
   const WiproEmp= array_emps.filter((etailsmpDe)=>{
    return etailsmpDe.emp_company=="Wipro";
    });
    result1.forEach(element => {
        console.log(element);
    });
      

    console.log(`=================Employee from 'IT' or 'HR'=================`);
   const ITEmp= array_emps.filter((etailsmpDe)=>{
    return (etailsmpDe.emp_dept=="IT")||( etailsmpDe.emp_dept== "HR");
    });
    ITEmp.forEach(element => {
        console.log(element);
    });

    console.log(`=================Employee whose id is greatr than 50=================`);

    const IDEmp = array_emps.filter((dataID)=>{
     return dataID.emp_id > 50;
     });
     IDEmp.forEach(dataID => {
         console.log(dataID.emp_id,dataID.emp_company,dataID.emp_dept,dataID.emp_name,dataID.emp_salary);
     });



     console.log(`=================Name start with A=================`);

     const nmn = array_emps.filter((dataNmn)=>{
        return  dataNmn.emp_name.startsWith ("A")||dataNmn.emp_name.startsWith ("V")|| dataNmn.emp_name.startsWith ("M");
        });
        nmn.forEach(dataNmn => {
            console.log(dataNmn.emp_name);
        });

        console.log(`=================The Average salary of employee=================`);
          let contin=0;
        const Avg = array_emps.filter((AVGSAL)=>{
           return  contin=contin+AVGSAL.emp_salary;
           
        });
        console.log(`The Average salary of employee =`,contin/array_emps.length);

        console.log(`=================The Average salary of  IT employee=================`);

        let ITcontain=0;
        const ITAvg = array_emps.filter((AVGSAITL)=>{
        if (AVGSAITL.emp_dept=="IT") {
           return ITcontain+= AVGSAITL.emp_salary ;
        }
      });
      console.log(`Average salary of IT department: `,ITcontain/ITAvg.length);
   