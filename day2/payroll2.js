const employeeName = "Philip";
console.log(`Employee: ${employeeName}`);
const daysWorked = 22;
const performanceScore = 85;
const isFullTime = true;
const hasWarning = false;

// Attendance Evaluation 
if (daysWorked >= 22) {
    console.log("Attendance: Excellent Attendance");
} else if (daysWorked >= 18 ) { 
    console.log("Attendance: Good Attendance");
} else if (daysWorked >= 15 ) {
    console.log("Attendance: Poor Attendance");
} else if (daysWorked < 15 ) {
    console.log("Attendance: Attendance Warning");
}

// Bonus eligibility
const bonusEligible = performanceScore >= 80 && isFullTime && !hasWarning
console.log(`Bonus Eligible: ${bonusEligible}`);

// Bonus calculation
let bonus;
if (bonusEligible) {
    bonus = 5000;
} else {
    bonus = 0;
}
console.log(`Bonus Amount: Ksh ${bonus}`);

// Performance review
// - Use a loop to count from 1 to 5, displaying:
//   "Performance review number: 1" and so on.

for (let i = 1; i <= 5; i++){
    console.log(`Performance review number: ${i}`);
}


// Employee: Philip
// Attendance: Excellent Attendance
// Bonus Eligible: true
// Bonus Amount: KSh 5000

// Performance review number: 1
// Performance review number: 2
// Performance review number: 3
// Performance review number: 4
// Performance review number: 5