var totAmt = document.querySelector("#totalAmount");
var tipPerc = document.querySelector("#tipPercentage");
var sub = document.querySelector("#submit");
var h4Tag = document.querySelector("#tip-amount");
var h2Tag = document.querySelector("#new-total");

sub.addEventListener("click", function (event) {
  event.preventDefault();
  var totalTipAmount = totAmt.value * (tipPerc.value / 100);
  var newBillAmount = Number(totAmt.value) + totalTipAmount;
  h4Tag.textContent = "$" + totalTipAmount;
  h2Tag.textContent = "$" + newBillAmount;
});
