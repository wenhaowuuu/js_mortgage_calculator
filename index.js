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

amountInput.addEventListener("change", function(e) {

    if (parseFloat(e.target.value) > 0) {
        mortAmount = parseFloat(e.target.value);
        console.log("mortgage amount: ", mortAmount);
    }
});

document.getElementById("termInput").addEventListener("change", function(e) {

    if (parseFloat(e.target.value) > 0) {
        mortTerm = parseFloat(e.target.value);
        console.log("mortgage term: ", mortTerm);
    }
});

document.getElementById("rateInput").addEventListener("change", function(e) {

    if (parseFloat(e.target.value) > 0) {
        interestRate = parseFloat(e.target.value) / 100;
        monthlyRate = interestRate / 12;
        console.log("interest rate: ", interestRate);
        console.log("monthly rate: ", monthlyRate);
    }
});


var repayOption = document.getElementById("repayInput");
var interestOption = document.getElementById("interestInput");

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

        document.getElementById("monthlyPayText").innerText = "$" + String(monthlyPay.toFixed(2));

        document.getElementById("totalPayText").innerText = "$" + String(totalPay.toFixed(2));
    }

})

var clearButton = document.getElementById("clearButtonID");

clearButton.addEventListener("click", function() {
    console.log("clear all!");

    if (amountInput) {
        amountInput.value = null;
        mortAmount = null;
        console.log("reset amount input", mortAmount);
    }


})

//Solution 2 - then try wrap around a calculator class