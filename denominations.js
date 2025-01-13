function calculateDenominations(amount, denomiantions){
   let result = {};
   let remainingAmount = Math.round(amount * 100);
   denomiantions.sort((a,b) =>b-a);

   for(let denom of denomiantions){
    let denomInPaise = Math.round(denom * 100);
    let count = Math.floor(remainingAmount/denomInPaise);
    if(count > 0){
        result[`${denom} unit`] = count;
        remainingAmount -= count * denomInPaise;
        console.log("remaining", remainingAmount);
    }
   }

   if (remainingAmount > 0) return -1;

    return result;
}

let amount = 70; // ₹13.50
let denominations = [10, 2, 1, 0.5]; // Available denominations: ₹10, ₹2, ₹1, 50p

const result = calculateDenominations(amount, denominations);
console.log(result);