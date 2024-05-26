document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    // Function to add a new task
    const addTodo = () => {
        const todoText = todoInput.value.trim();

        if (todoText !== '') {
            const todoItem = document.createElement('li');
            todoItem.className = 'todo-item';

            const todoSpan = document.createElement('span');
            todoSpan.textContent = todoText;
            todoItem.appendChild(todoSpan);

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.className = 'edit-button';
            todoItem.appendChild(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-button';
            todoItem.appendChild(deleteButton);

            todoList.appendChild(todoItem);
            todoInput.value = '';

            // Mark task as completed on click
            todoItem.addEventListener('click', (e) => {
                if (e.target.tagName !== 'BUTTON') {
                    todoItem.classList.toggle('completed');
                }
            });

            // Delete task on button click
            deleteButton.addEventListener('click', (e) => {
                e.stopPropagation();
                todoList.removeChild(todoItem);
            });

            // Edit task on button click
            editButton.addEventListener('click', (e) => {
                e.stopPropagation();
                const newTodoText = prompt('Edit your task', todoSpan.textContent);
                if (newTodoText !== null && newTodoText.trim() !== '') {
                    todoSpan.textContent = newTodoText.trim();
                }
            });
        }
    };

    // Add task on button click
    addButton.addEventListener('click', addTodo);

    // Add task on Enter key press
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
});
