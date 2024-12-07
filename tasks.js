function renderTasks(container) {
    container.innerHTML = `
        <section class="tasks">
            <h2>Task Manager!</h2>
            <form id="task-form">
                <input type="text" id="task-input" placeholder="Enter your task" required>
                <button type="submit">Add Task</button>
            </form>
            <ul id="task-list"></ul>
        </section>
    `;

    const form = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = document.getElementById('task-input').value.trim();
        if (task) {
            const listItem = document.createElement('li');
            listItem.textContent = task;
            taskList.appendChild(listItem);
            form.reset();
        }
    });
}
