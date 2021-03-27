var btn1 = document.querySelector("#add-btn");
var ulEl = document.querySelector("#people-list");
var modCont = document.querySelector("#modal-container");
var closeEl = document.querySelector(".close");
var nameHeaderEl = document.querySelector("#modal-name");
var descriptionEl = document.querySelector("#description");
var saveBtnEl = document.querySelector("#save");

var people = [{ name: "Bob" }];
var idCounter = 1;
btn1.addEventListener("click", function (event) {
  event.preventDefault();
  //created li and inserted li in ul
  var nameEl = document.querySelector("#name").value;
  var liEl = document.createElement("li");
  liEl.id = idCounter++;
  liEl.innerHTML = nameEl + " <button>edit</button>";
  ulEl.appendChild(liEl);
  // adding the input in "people" array
  people.push({
    name: nameEl,
  });
  console.log(people);
});

ulEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.matches("button")) {
    modCont.setAttribute("style", "display : block;");
    nameHeaderEl.textContent = people[event.target.parentElement.id].name;
    descriptionEl.textContent = people[event.target.parentElement.id].description;
  }
});

saveBtnEl.addEventListener("click", function(event){
    var nameText =  nameHeaderEl.textContent;
    var descriptionText = descriptionEl.value;

    for(cnt=0; cnt<people.length; cnt++) {
        if(people[cnt].name === nameText) {
            people[cnt].description = descriptionText;
        }
    }
    close();
});

function close() {
  modCont.style.display = "none";
}

closeEl.addEventListener("click", close);
