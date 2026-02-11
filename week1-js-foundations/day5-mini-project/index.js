// Employee Data Processing Mini Project

const employees = [
    { id: 1, name: "Vidhi", age: 22, salary: 25000, active: true },
  { id: 2, name: "Riya", age: 25, salary: 50000, active: false },
  { id: 3, name: "Dev", age: 30, salary: 70000, active: true }
]

// 1) Get Active Employees
const getActiveEmployees = (data) => 
  data.filter(emp => emp.active);

console.log("------------------------------------");

const ActiveEmployee=getActiveEmployees(employees);
console.log("ActiveEmployee :",ActiveEmployee);

// 2) Get Inactive Employees
const getInactiveEmployees = (data) => {
  return data.filter(emp => !emp.active);
};

console.log("------------------------------------");

const InactiveEmployee=getInactiveEmployees(employees);
console.log("InactiveEmployee :",InactiveEmployee);


// 3) Add 10% Salary Increase
const addTax = (data) => {
  return data.map(emp => ({
    ...emp,
    salary: emp.salary + emp.salary * 0.10
  }));
};

console.log("------------------------------------");

const AddText=getInactiveEmployees(employees);
console.log("InactiveEmployee :",AddText);

// 4) Get Total Salary
const getTotalSalary = (data) => {
  return data.reduce((sum, emp) => {
    return sum + emp.salary;
  }, 0);
};
console.log("------------------------------------");

const TotalSalary=getTotalSalary(employees);
console.log("TotalSalary :",TotalSalary);


//or 
const getTotalSalary1=(data) => data.reduce((sum,emp)=> sum+ emp.salary,0);
console.log("------------------------------------");

const TotalSalary1=getTotalSalary1(employees);
console.log("TotalSalary :",TotalSalary1);


// 5) Get Employee By ID
const getEmployeeById = (data, id) => {
  return data.find(emp => emp.id === id);
};

console.log("------------------------------------");

const EmpByID=getEmployeeById(employees,2);
console.log("Employee With ID :",EmpByID);

///home/differenz103/Devanshi_Trainee/nodejs-backend-training/week1-js-foundations/day5-mini-project