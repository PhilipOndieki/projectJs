const RENT_CHARGED = 20000;
let tenantMonthlyBalance = 0;
let rentPaid = 0
let currentMonthBalance = RENT_CHARGED - rentPaid;

for (let i = 1; i <= 12; i++){ 
    if (i <= 4 ){
        rentPaid = 20000;
        currentMonthBalance = RENT_CHARGED - rentPaid
        console.log(`Month ${i} | rent paid: ${rentPaid} | Balance: ${currentMonthBalance} | Reminder`);
    } else if (4 < i && i <= 7){
        rentPaid = 12000;
        currentMonthBalance = RENT_CHARGED - rentPaid
        console.log(`Month ${i} | rent paid: ${rentPaid} | Balance: ${currentMonthBalance} | Reminder`);
    } else if (i === 8){
        rentPaid = 0;
        currentMonthBalance = RENT_CHARGED - rentPaid
        console.log(`Month ${i} | rent paid: ${rentPaid} | Balance: ${currentMonthBalance} | Reminder`);
    } else{
        rentPaid = 25000;
        currentMonthBalance = RENT_CHARGED - rentPaid
        console.log(`Month ${i} | rent paid: ${rentPaid} | Balance: ${currentMonthBalance} | Reminder`);
    }

}