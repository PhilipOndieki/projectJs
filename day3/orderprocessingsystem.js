const customerName = "Philip";
const orderAmount = 25000;
const customerType = "premium";
const hasCoupon = true;
const couponCode = "SAVE2000";
const deliveryDistance = 12;
const paymentMethod = "mobile_money";



const isPremium = customerType === "premium";
const isRegular = customerType === "regular";
const isGuest = customerType === "guest";
const isMobileMoney = paymentMethod === "mobile_money";
const isCard = paymentMethod === "card";


// Task 1: Calculate membership discount

function calculateMembershipDiscount(orderAmount, customerType){
    if (isPremium){
        return orderAmount * 0.15;
    } else if (isRegular){
        return orderAmount * 0.05;
    } else {
        return orderAmount * 0;
    };
};

// Task 2: Validate coupon
const validateCoupon = function(couponCode, hasCoupon, orderAmount){
    return couponCode === "SAVE2000" && hasCoupon && orderAmount >= 10000
}

// Task 3: Calculate coupon discount
const calculateCouponDiscount = (couponValid) => {
    return couponValid ? 2000 : 0;
};

// Task 4: Calculate delivery fee
function calculateDeliveryFee(deliveryDistance, customerType){
    if (isPremium){
        return 0;
    }

    if ((isRegular || isGuest) && deliveryDistance <= 5){
        return 200;
    } else if ((isRegular || isGuest) && deliveryDistance <= 15){
        return 400;
    } else {
        return 700;
    }
};

// Task 5: Calculate final payment
const calculateFinalPayment = function(orderAmount, membershipDiscount, couponDiscount, deliveryFee){
    const finalPayment = orderAmount - membershipDiscount - couponDiscount + deliveryFee;
    return finalPayment;
}

// Task 6: Payment confirmation
const confirmPayment = (paymentMethod, finalPayment) => {
    if(isMobileMoney){
        return "Mobile Money Payment Selected"

    } else if (isCard){
        return "Card Payment Selected"

    } else{
        return "Unsupported Payment Method"
    }

};

const membershipDiscount = calculateMembershipDiscount(orderAmount, customerType);
const couponValid = validateCoupon(couponCode, hasCoupon, orderAmount);
const couponDiscount = calculateCouponDiscount(couponValid);
const deliveryFee = calculateDeliveryFee(deliveryDistance, customerType);
const finalPayment = calculateFinalPayment(orderAmount, membershipDiscount, couponDiscount, deliveryFee);
const paymentConfirmation = confirmPayment(paymentMethod, finalPayment);


console.log(`Customer: ${customerName}`);
console.log(`Customer Type: ${customerType}`);
console.log(`Original Order Amount: KSh ${orderAmount}`);
console.log(`Membership Discount: KSh ${membershipDiscount}`);
console.log(`Coupon Valid: ${couponValid}`);
console.log(`Coupon Discount: KSh ${couponDiscount}`);
console.log(`Delivery Fee: KSh ${deliveryFee}`);
console.log(`Final Payment: KSh ${finalPayment}`);
console.log(`Payment Status: ${paymentConfirmation}`);



