const todoForm = document.querySelector(".js-todoform");
const todoInput = document.querySelector(".js-todoform input");
const todoLists = document.querySelector(".js-todolist");
const TODO_LS = "todolist";
let toDos = [];

const paintTodo = todoItem => {
  const todoTemplate = `<li> ${todoItem}<button type="button">❌</button></li>`;
  todoLists.innerHTML += todoTemplate;
  toDos.push(todoItem);
  saveTodo();
  deleteList();
};

const getTodo = () => {
  todoForm.addEventListener("submit", e => {
    e.preventDefault();
    const todoItem = todoInput.value;
    paintTodo(todoItem);
    todoInput.value = "";
  });
};

const loadTodo = () => {
  const currentTodos = localStorage.getItem(TODO_LS);

  if (currentTodos === null) {
    getTodo();
  } else {
    const arrayCurrentTodos = currentTodos.split(",");
    arrayCurrentTodos.forEach(todoItem => {
      paintTodo(todoItem);
    });
    getTodo();
  }
};

loadTodo();
