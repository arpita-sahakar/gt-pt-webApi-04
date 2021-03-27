var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var timeEl = document.querySelector(".time");
var paraEl = document.querySelector("#para");
var words = poem.split(" ");

var setTimer = 5;

function prepareRead() {
  // Create the countdown timer.
  var timerInterval = setInterval(function(){
    setTimer--;
    timeEl.textContent = setTimer + " seconds to start";
    if(setTimer<=0){
      timeEl.textContent = " ";
      speedRead();
    }
  }, 1000);
  
}

function speedRead() {
  // Print words to the screen one at a time.

  var randomIndex = Math.floor(Math.random()*words.length);
  console.log(words[randomIndex]);
  paraEl.textContent = words[randomIndex];
  paraEl.setAttribute("style", "font-size : 50px; text-align : center;");
}
prepareRead();