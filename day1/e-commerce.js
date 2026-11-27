// e-commerce store

const customerName = "Philip";
const orderAmount = 12000;
const isPremiumMember = true;
const hasCoupon = true;
const couponDiscount = 1000;
const deliveryFee = 300;

// 1. membership discount 
let membershipDiscount;
if (isPremiumMember) {
    membershipDiscount = orderAmount * 0.15
} else {
    membershipDiscount = 0
}

// 2. total discount

const couponApplied = hasCoupon && orderAmount >= 5000

let appliedCouponDiscount;
if (couponApplied) {
    appliedCouponDiscount = couponDiscount
} else {
    appliedCouponDiscount = 0
}

const totalDiscounts = membershipDiscount + appliedCouponDiscount

// 3. delivery fee
const hasFreeDelivery = orderAmount >= 10000 || isPremiumMember;

// 4. delivery fee 
let finalDeliveryFee;
if (hasFreeDelivery) {
    finalDeliveryFee = 0;
} else {
    finalDeliveryFee = deliveryFee;
}

// 5. final payment = Order Amount - Total Discount + Delivery Fee
const finalPayment = orderAmount - totalDiscounts + finalDeliveryFee

console.log(`Customer Name: ${customerName}`);
console.log(`Order Amount: ${orderAmount}`);
console.log(`Premium Member: ${isPremiumMember}`);
console.log(`Coupon Available: ${hasCoupon}`);
console.log(`Membership Discount: ${membershipDiscount}`);
console.log(`Coupon Applied: ${couponApplied}`);
console.log(`Coupon Discount: ${couponDiscount}`);
console.log(`Total Discounts: ${totalDiscounts}`);
console.log(`Free Delivery: ${hasFreeDelivery}`);
console.log(`Delivery Fee: ${finalDeliveryFee}`);
console.log(`Final Payment: ${finalPayment}`);