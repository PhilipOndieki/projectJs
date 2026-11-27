const RENT_GOAL = 52500;
const INITIAL_SAVING = 3000;
const MONTHLY_INCREASE = 500;
const QUARTER_INTERVAL = 3;
const HIGH_SAVING_THRESHOLD = 5000;

let monthlySaving = INITIAL_SAVING;
let total = 0;
let monthNumber = 0

while (total < RENT_GOAL){
    monthNumber++;
    total += monthlySaving;

    console.log(`Month ${monthNumber}: saved ${monthlySaving}, total ${total}.`);

    if (monthNumber % QUARTER_INTERVAL === 0) {
        console.log("Quarter check");
    }

    if (monthlySaving > HIGH_SAVING_THRESHOLD){
        console.log("High saving month")
    }

    monthlySaving += MONTHLY_INCREASE;

}

console.log(`Number of months needed: ${monthNumber}`)

