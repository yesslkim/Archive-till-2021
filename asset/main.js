const todo = document.querySelector(".todo");

todo.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.parentElement.remove();
  }

  if (e.target.classList.contains("check-btn")) {
    const todoText = e.target.parentElement.previousElementSibling;
    const todoList = e.target.parentElement;
    todoText.classList.add("line-through");
    todoList.classList.add("complete-ico");
  }
});
