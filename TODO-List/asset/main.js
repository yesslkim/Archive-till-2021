// 삭제 및 할일완료 버튼

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

// TODO 추가

const addForm = document.querySelector(".add-form");

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let todoText = addForm.add.value;
  const todoTemplate = `
<li class="todo-list">
<p class="list-text">${todoText}</p>
<div class="todo-btn">
  <button type="button" class="check-btn btn">
    <span class="sr-only">list is done</span>
  </button>
  <button type="button" class="delete-btn btn">
    <span class="sr-only">delete the list</span>
  </button>
</div>

</li>
`;
  todo.innerHTML += todoTemplate;
  addForm.reset();
});
