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


    let empArray=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
    console.log(`=============TCS employee details(name and company)=============`);
    console.log(`NAME  COMPANY`);


    empArray.forEach((currentCompaney) => {
        if (currentCompaney.emp_company=="TCS") {
            console.log(currentCompaney.emp_name,` `,currentCompaney.emp_company,);
        }
    });
    console.log("-----------------------------------------------------------------------------");
    empArray.forEach((currentCompaneySalary) => {
        if (currentCompaneySalary.emp_salary>=50000) {
            console.log(`Employee ID:`,currentCompaneySalary.emp_id,`Employee NAME:`,currentCompaneySalary.emp_name,`Employee Department:`,currentCompaneySalary.emp_dept,`Employee SALARY:`,currentCompaneySalary.emp_salary,`Employee COMPANY:`,currentCompaneySalary.emp_company);
        }
    });

    console.log("-----------------------------------------------------------------------------");
    console.log("sum of all employee salary");

    var sum=0;
    empArray.forEach((totalSalary) => {
        sum=sum+totalSalary.emp_salary;
        
    });
    console.log(sum);        
console.log("-----------------------------------------------------------------------------");
var Average=0;
    empArray.forEach(avgSal => {

        Average= sum/empArray.length;
        
    });
    console.log(`Average Salary:=`,Average);
    console.log("-----------------------------------------------------------------------------");
console.log(`"IT" or "HR" department employee whose salary is greater than or equal  to 75000. \n`);
    empArray.forEach(ITandHRsal => {
        if ((ITandHRsal.emp_dept=="IT" ||ITandHRsal.emp_dept=="HR") && ITandHRsal.emp_salary >= 75000) {
            console.log(`Employee ID:`,ITandHRsal.emp_id,`Employee NAME:`,ITandHRsal.emp_name,`Employee Department:`,ITandHRsal.emp_dept,`Employee SALARY:`,ITandHRsal.emp_salary,`Employee COMPANY:`,ITandHRsal.emp_company);
        }
    });


 