let bonus;
const employees = [
    {
        id: 1,
        name: "Philip",
        department: "IT",
        salary: 60000,
        performanceScore: 85
    },
    {
        id: 2,
        name: "Daniel",
        department: "Finance",
        salary: 45000,
        performanceScore: 72
    },
    {
        id: 3,
        name: "Mary",
        department: "IT",
        salary: 70000,
        performanceScore: 95
    },
    {
        id: 4,
        name: "John",
        department: "HR",
        salary: 35000,
        performanceScore: 60
    },
    {
        id: 5,
        name: "Sarah",
        department: "Finance",
        salary: 55000,
        performanceScore: 88
    }
];

// Task 1 – Display all employees (10 marks)
employees.forEach(function(employee){
    console.log(employee.name, employee.department, employee.salary);
});


// Task 2 – Find an employee
function findEmployee(employeeId){
    const employee = employees.find(function(person){
        return person.id === employeeId;
    });

    if (employeeId === 0 | employeeId > 5  ){
        return "Employee not found";
    }
}
console.log(findEmployee(0))
// Task 3 – Filter employees by department (15 marks)

function getEmployeesByDepartment(departmentName){
    const employee = employees.filter(function(employee){
        return employee.department === departmentName
    });
    return employee;
};

console.log(getEmployeesByDepartment("IT"))

// Task 4 – Calculate total payroll (15 marks)

function calculateTotalPayroll(){
    const totalSalary = employees.reduce(function(total, employee){
        return total + employee.salary;
    }, 0);
    
    return totalSalary 
};

console.log(calculateTotalPayroll());

// Task 5 – Give employees performance bonuses (15 marks)

function calculateBonus(employee){
    if (employee.performanceScore < 70){
        return bonus = 0
    } else if (employee.performanceScore < 79) {
        return bonus = employee.salary * 0.05;
    } else if (employee.performanceScore < 89) {
        return bonus = employee.salary * 0.10;
    } else {
        return bonus = employee.salary * 0.15;
    }
}

console.log(calculateBonus( {
        id: 1,
        name: "Philip",
        department: "IT",
        salary: 60000,
        performanceScore: 85
    }));

// Task 6 – Create a new employee salary report (15 marks)

const increasedSalaries = employees.map(function(employee){
    return employee.salary + bonus;
});

console.log(increasedSalaries);