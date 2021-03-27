var eventType = document.querySelector("#event-type"); 
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");
var keyEl = document.querySelector("#key");
var codeEl = document.querySelector("#code");
var xEl = document.querySelector("#x");
var yEl = document.querySelector("#y");
var targetEl = document.querySelector("#target");


// var targetEl = document.querySelector("#target");

function toggleDisplay(event) {
  var value = event.target.value;
  if(value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  }
  else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
}

eventType.addEventListener("change", function(event){
 toggleDisplay(event);

 });

// document.addEventListener("click", function(event){
//   console.log(event.screenX + "," + event.screenY + "," + event.target.textContent);
//   targetEl.textContent = event.target.
// });

document.addEventListener("keydown", function(event){
  keyEl.textContent = event.key;
  codeEl.textContent = event.keyCode;


});


document.addEventListener("click", function(event){
  xEl.textContent = event.x;
  yEl.textContent = event.y;
  targetEl.textContent = event.target.textContent;
});