const employeeName = "Philip";
const basicSalary = 60000;
const transportAllowance = 8000;
const performanceBonus = 5000;
const taxRate = 0.10;
const performanceScore = 85;

// 1. Calculate gross salary
function calculateGrossSalary(salary, transportAllowance, perfomanceBonus){
    return salary + transportAllowance + perfomanceBonus;
};

// 2. Calculate tax
function calculateTax(grossSalary, taxRate){
    return grossSalary * taxRate;
};

// 3. Calculate net salary
const calculateNetSalary = function(grossSalary, taxAmount){
    return grossSalary - taxAmount;
};

// 4. Determine employee eligibility
const checkBonusEligibility = (perfomanceScore) => {
    return perfomanceScore >= 80;
}
const grossSalary = calculateGrossSalary(
    basicSalary,
    transportAllowance,
    performanceBonus,
);



const taxAmount = calculateTax(grossSalary, taxRate);
const netSalary = calculateNetSalary(grossSalary, taxAmount);
const bonusEligibility = checkBonusEligibility(performanceScore);


console.log(`Employee: ${employeeName}`);
console.log(`Basic Salary: KSh ${basicSalary}`);
console.log(`Gross Salary: KSh ${grossSalary}`);
console.log(`Tax: KSh ${taxAmount}`);
console.log(`Net Salary: KSh ${netSalary}`);
console.log(`Bonus Eligible: ${bonusEligibility}`);
