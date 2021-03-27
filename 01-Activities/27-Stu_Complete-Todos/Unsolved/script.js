var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

// renderTodos();

// function renderTodos() {
//   // Clear todoList element and update todoCountSpan
//   todoList.innerHTML = "";
//   todoCountSpan.textContent = todos.length;

//   // Render a new li for each todo
//   for (var i = 0; i < todos.length; i++) {
//     var todo = todos[i];

//     var li = document.createElement("li");
//     li.textContent = todo;
//     todoList.appendChild(li);
//   }
// }

// // When form is submitted...
// todoForm.addEventListener("submit", function(event) {
//   event.preventDefault();

//   var todoText = todoInput.value.trim();

//   // Return from function early if submitted todoText is blank
//   if (todoText === "") {
//     return;
//   }

//   // Add new todoText to todos array, clear the input
//   todos.push(todoText);
//   todoInput.value = "";

//   // Re-render the list
//   renderTodos();
// });

function renderTodos() {
  todoList.innerHTML = "";
  for (i = 0; i < todos.length; i++) {
    var liEl = document.createElement("li");
    liEl.innerHTML = todos[i] + " <button>Complete</button>";
    liEl.setAttribute("data-index", i);
    todoList.appendChild(liEl);
  }
  todoCountSpan.textContent = todos.length;
}

renderTodos();

todoInput.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();

    var receivedValue = todoInput.value;
    if (receivedValue != "") {
      todos.push(receivedValue);
      todoInput.value = "";
      renderTodos();
    }
  }
});

todoList.addEventListener("click", function(event){
  event.preventDefault();
  if(event.target.matches("button")) {
    var createdId = event.target.parentElement.getAttribute("data-index");
    console.log("created id " + createdId);
    console.log("Todos array before " + todos);
    todos.splice(createdId, 1);
    console.log("Todos array after " + todos);
    renderTodos();
  }

});