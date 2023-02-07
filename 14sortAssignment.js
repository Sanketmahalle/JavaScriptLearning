const  array_roll_number=[113,45,56,11,32,45,109,799,56,45];
console.log("------------------Reverse array------------------");
console.log(`Current array: `,array_roll_number);
console.log(`Reverse array: `,array_roll_number.reverse())
;
console.log("------------------Sort array without custom logic------------------");
let res=array_roll_number.sort();
console.log(`Current array: `,array_roll_number);

console.log(`sort array: `,res);

console.log("------------------Sort array in assending With custom logic------------------");
console.log(`Current array: `,array_roll_number);
 let result= array_roll_number.sort((a,b)=>{
return a-b;
})
console.log(result);
console.log("------------------find greatest number------------------");
console.log(`Current array: `,array_roll_number);

let resultGreatestNUmber= array_roll_number.sort((a,b)=>{
    return a-b;
    })
   
    console.log(`greatest number from array is : `,resultGreatestNUmber[resultGreatestNUmber.length-1]);
    console.log("------------------find Smallest number------------------");

    console.log(`Current array: `,array_roll_number);
let 
    resultSmallestNUmber= array_roll_number.sort((a,b)=>{
        return a-b;
        })
        console.log(`Smallest number from array is : `,resultSmallestNUmber[0]);
    
        console.log("------------------remove duplicate number------------------");
        console.log(`Current array: `,array_roll_number);
        final=new Set(array_roll_number)
        console.log(final);



        
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
        
        
                var array_employees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
                console.log(`Given Employee data` );
                console.table(array_employees );
console.log("------------------------Assending order of Employee id------------------------");

let resultEmpID= array_employees.sort((a,b)=>{
    return a.emp_id - b.emp_id;
    })
   
    resultEmpID.forEach(element => {
        console.log(element.emp_id,element.emp_name,element.emp_dept);
    });

    console.log("------------------------Assending order of Employee department------------------------");

let resultEmpDept= array_employees.sort((a,b)=>{
    return a.emp_dept > b.emp_dept ? 1 : -1 ;
    })
   
    resultEmpDept.forEach(element => {
        console.log(element.emp_id,element.emp_dept,element.emp_name);
    });

    console.log("------------------------Descending order of Employee salary------------------------");

    let resultEmpsal= array_employees.sort((a,b)=>{
        return a.emp_salary > b.emp_salary ? -1 : 1 ;
        })
       
        resultEmpsal.forEach(element => {
            console.log(element.emp_name,element.emp_salary,element.emp_dept);
        });
    

