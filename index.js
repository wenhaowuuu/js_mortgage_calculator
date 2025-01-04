// js file for mortgage calculator logic
// simple logic: with amount, interest rate, and term, calculate the repayment or interest only upon clicking of calculate button
// addEventListener for the input fields
// addEventListener for the calculate button click

//Solution 1 - try window global property first
//Solution 2 - then try wrap around a calculator class
var mortAmount;
var interestRate;
var mortTerm;

document.getElementById("amountInput").addEventListener("change", function(e) {

    if (parseInt(e.target.value) > 0) {
        mortAmount = parseInt(e.target.value);
        console.log("mortgage amount: ", mortAmount);
    }
});

document.getElementById("rateInput").addEventListener("change", function(e) {

    if (parseFloat(e.target.value) > 0) {
        interestRate = parseFloat(e.target.value);
        console.log("interest rate: ", interestRate);
    }
});