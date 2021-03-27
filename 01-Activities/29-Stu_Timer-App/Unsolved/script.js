var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;

function startTimer() {
  // Write code to start the timer here
  var interval = setInterval(function(){
    totalSeconds--;

    secondsElapsed++;
    if(secondsElapsed>=60){
      secondsElapsed = 0;
    }
    var minsRem = Math.floor(totalSeconds / 60);
    var secsRem = 60 - secondsElapsed;

    if(minsRem <= 0 && secsRem === 60) {
      clearInterval(interval);
      alert("Time to rest");
    }
    minutesDisplay.textContent = minsRem;
    secondsDisplay.textContent = secsRem;
    

  },1000);
  
}

playButton.addEventListener("click", startTimer);

function init(){
  var workMins =Number(workMinutesInput.value);
  
  totalSeconds = workMins * 60;
  workMinutesInput.value = "";

}

init();
startTimer();
