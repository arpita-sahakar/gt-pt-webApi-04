var addBtn = document.querySelector("#add-btn");
var nameEl = document.querySelector("#name");
var peopleListEl = document.querySelector("#people-list");

var people = [
    { name: "Bob" }
  ];


var id = 1;

function addPersonToList(event) {
  event.preventDefault();
  //Adding to screen list (UL)
  var li = document.createElement("li");
  li.id = id++;
  li.innerHTML = nameEl.value + " <button>edit</button>";
  peopleListEl.appendChild(li);

  //Adding to people array
  var peopleObj = { name: nameEl.value };
  people.push(peopleObj);

}

addBtn.addEventListener("click", addPersonToList);


// 

// var modalEl = document.querySelector("#modal-container");
// var modalNameEl = document.querySelector("#modal-name");
// var descriptionEl = document.querySelector("#description");
// var closeEl = document.querySelector(".close");
// var saveBtn = document.querySelector("#save");

// 
// var currentId = 0;
// 
// function addPersonToList(event) {
//   event.preventDefault();
//   var nameVar = nameEl.value;
//   var li = document.createElement("li");
//   li.id = id++;
//   li.innerHTML = nameVar + " <button>edit</button>";
//   people.push({ name: nameVar });
//   peopleListEl.append(li);
// }

// function close() {
//   modalEl.style.display = "none";
// }

// function handleClick(event) {
//   // Use event delegation to handle when the user clicks "edit"

//   if (event.target.matches("button")) {
//     console.log("selected name is " + people[event.target.parentElement.id].name);


//     modalEl.style.display = "block";
//     modalNameEl.textContent = people[event.target.parentElement.id].name;
//   }
// }

// closeEl.addEventListener("click", close);
// addBtn.addEventListener("click", addPersonToList);
// peopleListEl.addEventListener("click", function (event) {
//   event.preventDefault();
//   handleClick(event);
// });
