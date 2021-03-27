var increBtn = document.querySelector("#increment");
var decreBtn = document.querySelector("#decrement");

var theChangingValue = document.querySelector("#count");

var counter = 0;
increBtn.addEventListener("click", function(){

  counter++;
  theChangingValue.textContent = counter;

});

decreBtn.addEventListener("click" , function(){

  counter--;
  theChangingValue.textContent = counter;

});