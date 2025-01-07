// js file for mortgage calculator logic
// simple logic: with amount, interest rate, and term, calculate the repayment or interest only upon clicking of calculate button
// addEventListener for the input fields
// addEventListener for the calculate button click

//Solution 1 - try window global property first

var mortAmount;
var interestRate;
var monthlyRate;
var mortTerm;
var mortType;

var monthlyPay;
var totalPay;

var amountInput = document.getElementById("amountInput");
var termInput = document.getElementById("termInput");
var rateInput = document.getElementById("rateInput");
var repayOption = document.getElementById("repayInput");
var interestOption = document.getElementById("interestInput");

var monthlyPayText = document.getElementById("monthlyPayText");
var totalPayText = document.getElementById("totalPayText");

amountInput.addEventListener("change", function(e) {

    if (parseFloat(e.target.value) > 0) {
        mortAmount = parseFloat(e.target.value);
        console.log("mortgage amount: ", mortAmount);
    }
});

termInput.addEventListener("change", function(e) {

    if (parseFloat(e.target.value) > 0) {
        mortTerm = parseFloat(e.target.value);
        console.log("mortgage term: ", mortTerm);
    }
});

rateInput.addEventListener("change", function(e) {

    if (parseFloat(e.target.value) > 0) {
        interestRate = parseFloat(e.target.value) / 100;
        monthlyRate = interestRate / 12;
        console.log("interest rate: ", interestRate);
        console.log("monthly rate: ", monthlyRate);
    }
});


repayOption.addEventListener("change", function(e) {

    if (repayOption.checked) {
        mortType = repayOption.value;
        console.log("mortgage type: ", mortType);
    }

});


interestOption.addEventListener("change", function(e) {

    if (interestOption.checked) {
        mortType = interestOption.value;
        console.log("mortgage type: ", mortType);
    }

});

var calculateButton = document.getElementById("calculateButton");

calculateButton.addEventListener("click", function() {
    console.log("calculate!");

    if (!mortAmount ||
        !interestRate || !mortTerm || !mortType) {
        alert("invalid input! Please check.");
    } else {
        monthlyPay = mortAmount *
            ((
                monthlyRate * (1 + monthlyRate) ** (mortTerm * 12)) / ((1 + monthlyRate) ** (mortTerm * 12) - 1));

        totalPay = monthlyPay * mortTerm * 12;

        console.log("monthly payment: ", monthlyPay.toFixed(2));
        console.log("total payment: ", totalPay.toFixed(2));

        monthlyPayText.innerText = "$" + String(monthlyPay.toFixed(2));
        totalPayText.innerText = "$" + String(totalPay.toFixed(2));
    }

})

var clearButton = document.getElementById("clearButtonID");

clearButton.addEventListener("click", function() {
    console.log("clear all!");

    if (amountInput || termInput || rateInput || repayOption || interestOption) {
        amountInput.value = null;
        termInput.value = null;
        rateInput.value = null;
        repayOption.checked = false;
        interestOption.checked = false;

        mortAmount = null;
        mortTerm = null;
        interestRate = null;
        monthlyRate = null;
        mortType = null;

        monthlyPay = null;
        totalPay = null;

        monthlyPayText.innerText = null;
        totalPayText.innerText = null;

        console.log("reset amount input", mortAmount);
    }


})

//Solution 2 - then try wrap around a calculator class