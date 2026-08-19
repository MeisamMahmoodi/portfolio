const addTodoButton = document.getElementById("addTodo");

const todoList = document.getElementById("todoList")

const inputField = document.getElementById("inputTodo")

function complete() {

  let todofont = document.createElement("p")

  todofont.innerText = inputField.value
  todoList.appendChild(todofont)
  inputField.value = "";

  todofont.addEventListener("click", function() {
      todofont.style.color = "red";
      todofont.style.textDecoration = "line-through";
  });

  todofont.addEventListener("dblclick", function() {
      todofont.remove();
  })
}

addTodoButton.addEventListener("click", complete)
