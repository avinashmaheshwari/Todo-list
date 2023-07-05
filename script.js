const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const task = todoInput.value.trim(); // Remove leading/trailing whitespaces

  if (task !== '') {
    const li = document.createElement('li');
    li.textContent = task;
    todoList.appendChild(li);

    li.addEventListener('click', function() {
      li.classList.toggle('completed');
    });

    todoInput.value = ''; // Clear the input field
  }
});
