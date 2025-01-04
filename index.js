// js file for mortgage calculator logic
// simple logic: with amount, interest rate, and term, calculate the repayment or interest only upon clicking of calculate button
// addEventListener for the input fields
// addEventListener for the calculate button click

//Solution 1 - try window global property first

var mortAmount;
var interestRate;
var mortTerm;
var mortType;

document.getElementById("amountInput").addEventListener("change", function(e) {

    if (parseInt(e.target.value) > 0) {
        mortAmount = parseInt(e.target.value);
        console.log("mortgage amount: ", mortAmount);
    }
});

document.getElementById("termInput").addEventListener("change", function(e) {

    if (parseInt(e.target.value) > 0) {
        mortTerm = parseInt(e.target.value);
        console.log("mortgage term: ", mortTerm);
    }
});

document.getElementById("rateInput").addEventListener("change", function(e) {

    if (parseFloat(e.target.value) > 0) {
        interestRate = parseFloat(e.target.value);
        console.log("interest rate: ", interestRate);
    }
});


var repayOption = document.getElementById("repayInput");
var interestOption = document.getElementById("interestInput");

repayOption.addEventListener("change", function(e) {

    if (repayOption.checked) {
        mortType = repayOption.value;
        console.log("mortgage type: ", mortType);
    }
    // else {
    //     interestOption.checked = true;
    // }
});


interestOption.addEventListener("change", function(e) {

    if (interestOption.checked) {
        mortType = interestOption.value;
        console.log("mortgage type: ", mortType);
    }

});



//Solution 2 - then try wrap around a calculator class