// selector

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
// Event Listiner
todoButton.addEventListener("click", addtodo);
todoList.addEventListener("click", deletetodo);

// Function

function addtodo(event) {
  event.preventDefault();
  //   create div element
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // create li element
  const todoLi = document.createElement("li");
  todoLi.innerText = todoInput.value;
  todoLi.classList.add("todo-item");
  //   create new check box
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  todoLi.appendChild(checkbox);
  checkbox.classList.add("box");

  todoDiv.appendChild(todoLi);

  //   create make button
  const todoMakeButton = document.createElement("button");
  todoMakeButton.innerHTML = "<i class = 'fas fa-check'></i>";
  todoMakeButton.classList.add("complate-btn");
  todoDiv.appendChild(todoMakeButton);
  //   create remove button
  const todoremoveButton = document.createElement("button");
  todoremoveButton.innerHTML = "<i class = 'fas fa-trash'></i>";
  todoremoveButton.classList.add("trash-btn");
  //   Remove ChildPaterns
  todoremoveButton.addEventListener("click", function () {
    todoDiv.remove(todoLi);
  });
  todoDiv.appendChild(todoremoveButton);
  //   final todo appenchild
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

// function deletetodo(e) {
//   const item = e.target;
//   if (item.classList[0] === "trash-btn") {
//     item.remove();
//   }
//   if (item.classList[0] === "complate-btn") {
//     const todo = item.parentElement;
//     todo.classList.toggle("complate");
//   }
// }
