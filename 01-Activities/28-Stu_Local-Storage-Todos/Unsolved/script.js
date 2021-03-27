var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

init();

// function renderTodos() {
//   // Clear todoList element and update todoCountSpan
//   todoList.innerHTML = "";
//   todoCountSpan.textContent = todos.length;

//   // Render a new li for each todo
//   for (var i = 0; i < todos.length; i++) {
//     var todo = todos[i];

//     var li = document.createElement("li");
//     li.textContent = todo;
//     li.setAttribute("data-index", i);

//     var button = document.createElement("button");
//     button.textContent = "Complete";

//     li.appendChild(button);
//     todoList.appendChild(li);
//   }
// }

function init() {
  // Write code here to check if there are todos in localStorage
  if (localStorage.getItem("todos") != null) {
    // If so, parse the value from localStorage and assign it to the todos variable
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  // Render todos to the DOM
  renderTodos();
}

function storeTodos() {
  // Add code here to stringify the todos array and save it to the "todos" key in localStorage
  localStorage.setItem("todos", JSON.stringify(todos));
}

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

//   // Store updated todos in localStorage, re-render the list
//   storeTodos();
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
      // Store updated todos in localStorage, re-render the list
      storeTodos();
      renderTodos();
    }
  }
});

todoList.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.matches("button")) {
    var createdId = event.target.parentElement.getAttribute("data-index");
    console.log("created id " + createdId);
    console.log("Todos array before " + todos);
    todos.splice(createdId, 1);
    console.log("Todos array after " + todos);
    renderTodos();
  }
});
