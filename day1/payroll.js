// THis a  payroll management system. 

const employeeName = "Philip";
const basicSalary = 50000;
const transportAllowance = 5000;
const perfomanceScore = 87;
const isFullTime = true;
const hasDisciplinaryCase = false;


// Calculate grossSalary = Basic Salary + Transport Allowance 

const grossSalary = basicSalary + transportAllowance 

// 2. Bonus eligibility
const bonusEligible = perfomanceScore >= 80 && isFullTime && !hasDisciplinaryCase

// 3. calculate the bonus: 10% of the basicsalary 

if (bonusEligible) {
    bonus = basicSalary * 0.1;

} else {
    bonus = 0;
}

// 4. recalculate final salary = Gross Salary + Bonus
 const finalSalary = grossSalary + bonus;

console.log(`Employee Name: ${employeeName}`);
console.log(`Perfomance Score: ${perfomanceScore}`);
console.log(`Basic Salary: ${basicSalary}`);
console.log(`Transport Allowance: ${transportAllowance}`);
console.log(`Full-Time Employee: ${isFullTime}`);
console.log(`Has Disciplinary Case: ${hasDisciplinaryCase}`);
console.log(`Gross Salary: ${grossSalary}`);
console.log(`Bonus Eligible: ${bonusEligible}`);
console.log(`Bonus Amount: ${bonus}`);
console.log(`Final Salary: ${finalSalary}`);