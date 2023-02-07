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
                   
  let   map_employees=new Map();
  map_employees.set(22,emp_anil);
  map_employees.set(23,emp_radha);
  map_employees.set(55,emp_rishi);
  map_employees.set(66,emp_sonali);
  map_employees.set(77,emp_monika);
  map_employees.set(88,emp_viny);
  map_employees.set(99,emp_mahi);


  map_employees.forEach((Details ,key) => {
    console.log(`${key}===>`,`Name:`,Details.emp_name,` Dept:`,Details.emp_dept,` Company:`,Details.emp_company,` Salary:`,Details.emp_salary);
  });