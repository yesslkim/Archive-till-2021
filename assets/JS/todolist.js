const todoForm = document.querySelector(".js-todoform");
const todoInput = document.querySelector(".js-todoform input");
const todoLists = document.querySelector(".js-todolist");
const TODO_LS = "todolist";

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
