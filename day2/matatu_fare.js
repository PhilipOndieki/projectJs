// Practical scenario: matatu fare calculator

// A matatu charges fares by the hour of the day.

// Peak hours are 6 to 9 and 17 to 20, inclusive. The fare is 100 KES.
// Night hours are 22 to 23 and 0 to 4. The fare is 80 KES.
// All other hours cost 50 KES.

// Write a program that:

// Uses a for loop to go through every hour from 0 to 23.
// Uses if, else if and else with && and || to choose the fare.
// Prints a line for each hour, for example Hour 7: 100 KES.
// Counts the peak hours and prints the total at the end.

const peakHourFare = 100;
const nightHourFare = 80;
const otherHourFare = 50;

let peakHour;
let nightHour;
let peakHourCount = 0;
for (let i = 0; i <= 23; i++){
    peakHour = 6 <= i && i <= 9 || 17 <= i && i <= 20;
    nightHour = 22 <= i && i <= 23 || 0 <= i && i <= 4;
    if (peakHour){
        console.log(`Hour ${i}: ${peakHourFare} KES`);
        peakHourCount++;
    } else if (nightHour) {
        console.log(`Hour ${i}: ${nightHourFare} KES`);
    } else {
        console.log(`Hour ${i}: ${otherHourFare} KES`);
    }
}
console.log(`Total Peak Hours: ${peakHourCount}`);