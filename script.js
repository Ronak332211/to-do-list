document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.textContent = taskText;

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove';
        removeBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(completeBtn);
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = '';
        taskInput.focus();
    }
});
