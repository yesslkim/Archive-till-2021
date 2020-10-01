const todoForm = document.querySelector(".js-todoform");
const todoInput = document.querySelector(".js-todoform input");
const todoLists = document.querySelector(".js-todolist");
const TODO_LS = "todolist";
let toDos = [];
let filterToDos;

const saveTodo = () => {
  localStorage.setItem(TODO_LS, toDos);
};

const deleteList = () =>
  todoLists.addEventListener("click", e => {
    const listIndex = Array.from(todoLists.children).indexOf(
      e.target.parentElement
    );
    if (e.target.tagName === "BUTTON") {
      if (filterToDos === undefined) {
        filterToDos = toDos.filter((toDo, index) => {
          return index !== listIndex;
        });
      } else {
        filterToDos = filterToDos.filter((toDo, index) => {
          return index !== listIndex;
        });
      }
      e.target.parentElement.remove();
      toDos = filterToDos;
      saveTodo();
    }
  });

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
