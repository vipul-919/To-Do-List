
document.querySelector('#push').onclick = function () {
    const inputField = document.querySelector('.new_task input');
    const tasksContainer = document.querySelector('.tasks');

    if (inputField.value.trim().length === 0) {
        alert('Please Enter a Task');
    } else {
        tasksContainer.innerHTML += `
        <div class="task">
            <span id="taskname">${inputField.value.trim()}</span>
            <button class="delete">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>`;
        const currentTasks = document.querySelectorAll('.delete');
        currentTasks.forEach((btn) => {
            btn.onclick = function () {
                this.parentNode.remove();
            };
        });
        
        const tasks = document.querySelectorAll('.task');
        tasks.forEach((task) => {
            task.onclick = function () {
                this.classList.toggle('completed');
            };
        });
        
        inputField.value = '';
    }
};

// if you want to storage your data in browser use this 
// below code 
// Load tasks from localStorage when the page loads
// window.onload = function () {
//     const tasksContainer = document.querySelector('.tasks');
//     const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

//     // Render saved tasks
//     savedTasks.forEach((task) => {
//         tasksContainer.innerHTML += `
//         <div class="task ${task.completed ? 'completed' : ''}">
//             <span id="taskname">${task.name}</span>
//             <button class="delete">
//                 <i class="fa-solid fa-trash-can"></i>
//             </button>
//         </div>`;
//     });

//     addTaskListeners();
// };

// document.querySelector('#push').onclick = function () {
//     const inputField = document.querySelector('.new_task input');
//     const tasksContainer = document.querySelector('.tasks');
//     const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

//     if (inputField.value.trim().length === 0) {
//         alert('Please Enter a Task');
//     } else {
//         const taskName = inputField.value.trim();

//         // Add the task to the DOM
//         tasksContainer.innerHTML += `
//         <div class="task">
//             <span id="taskname">${taskName}</span>
//             <button class="delete">
//                 <i class="fa-solid fa-trash-can"></i>
//             </button>
//         </div>`;

//         // Add the task to localStorage
//         savedTasks.push({ name: taskName, completed: false });
//         localStorage.setItem('tasks', JSON.stringify(savedTasks));

//         // Add event listeners to the new task
//         addTaskListeners();

//         // Clear the input field
//         inputField.value = '';
//     }
// };

// function addTaskListeners() {
//     const currentTasks = document.querySelectorAll('.delete');
//     const tasks = document.querySelectorAll('.task');
//     const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

//     // Add delete functionality for each delete button
//     currentTasks.forEach((btn) => {
//         btn.onclick = function (e) {
//             e.stopPropagation(); // Prevent toggling when deleting

//             const taskName = this.parentNode.querySelector('#taskname').innerText;
//             const filteredTasks = savedTasks.filter((task) => task.name !== taskName);
//             localStorage.setItem('tasks', JSON.stringify(filteredTasks));

//             this.parentNode.remove();
//         };
//     });

//     // Add toggle functionality for each task
//     tasks.forEach((task) => {
//         task.onclick = function () {
//             this.classList.toggle('completed');

//             const taskName = this.querySelector('#taskname').innerText;
//             const taskIndex = savedTasks.findIndex((task) => task.name === taskName);
//             if (taskIndex > -1) {
//                 savedTasks[taskIndex].completed = this.classList.contains('completed');
//                 localStorage.setItem('tasks', JSON.stringify(savedTasks));
//             }
//         };
//     });
// }



