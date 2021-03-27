var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

function renderTodos() {
    todoCountSpan.textContent = todos.length;

    for (i=0; i<todos.length; i++){

        var liEl = document.createElement("li");
        liEl.textContent = todos[i];
        todoList.appendChild(liEl);
        
    }
}

renderTodos();