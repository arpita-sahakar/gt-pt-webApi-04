var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

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

function renderTodos() {
  todoList.innerHTML = "";
  for (i = 0; i < todos.length; i++) {
    var liEl = document.createElement("li");
    liEl.textContent = todos[i];
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
      renderTodos();
    }
  }
});
