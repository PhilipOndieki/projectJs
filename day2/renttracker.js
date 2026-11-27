const RENT_CHARGED = 20000;

const LEASE_LENGTH = 12;

let rentPaid = 0
let currentMonthBalance = RENT_CHARGED  - rentPaid
let balanceCarriedForward = 0
let monthlyLateFees = 0;
let monthTotalBalance = RENT_CHARGED + monthlyRentFees - rentPaid;
const accountClear = monthTotalBalance <= 0;
const reminder = 0 < monthTotalBalance && monthTotalBalance <= 20000;
const finalNotice = 20000 < monthTotalBalance && monthTotalBalance <= 40000;
const legalActionWarning = monthTotalBalance > 40000;


for (let i = 1; i <= LEASE_LENGTH; i++ ){

    if (i <= 4){
        rentPaid = 20000;
        console.log(rentPaid);
    } else if (4 < i <= 7 ) {
        rentPaid = 12000;
        balanceCarriedForward = 0
        console.log(rentPaid)       
    } else if (i > 8 ) {
        rentPaid = 25000;
        balance
        console.log(rentPaid)
    } else {
        console.log(rentPaid)
        rentPaid = 0;
    }

    if (accountClear){
        console.log("Account clear.")
    } else if (reminder){
        console.log("Reminder.")
    } else if (finalNotice){
        console.log("Final notice.")
    } else {
        console.log("Legal action warning.")
    }

    if (currentMonthBalance > 0  ){
       monthlyLateFees = (balanceCarriedForward * 0.05).toFixed(2)
       monthTotalBalance += monthlyLateFees - rentPaid
    }
    console.log(`Month ${i} | Fee: ${monthlyRentFees + balanceCarriedForward} | Paid: ${rentPaid} | Balance: ${monthTotalBalance} | Reminder`);
    balanceCarriedForward += monthTotalBalance;
    console.log('');
}