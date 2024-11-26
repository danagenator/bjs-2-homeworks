debugger;
"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  let x1;
  let x2;
  if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  } else if (d === 0) {
    x1 = -b / (2 * a);
    arr.push(x1);
  }
  return arr;
}

debugger;
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent = percent / 100 / 12;
  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (monthPercent + (monthPercent / (((1 + monthPercent)**countMonths) - 1)));
  let totalAmount = monthlyPayment * countMonths;
  return(Number(totalAmount.toFixed(2)));
}
