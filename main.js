/*document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Add a new task
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = ''; // Clear the input field
        }
    });

    // Function to add a task to the list
    function addTask(taskText) {
        // Create a new list item
        const li = document.createElement('li');
        li.classList.add('task-item');

        // Add the task text
        const span = document.createElement('span');
        span.textContent = taskText;
        li.appendChild(span);

        // Add the delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        li.appendChild(deleteBtn);

        // Add delete functionality
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        // Append the task to the list
        taskList.appendChild(li);
    }
});*/
