const taskListDiv = document.getElementById('taskList');
const chatBoxDiv = document.getElementById('chatBox');
const createTaskBtn = document.getElementById('createTaskBtn');

// Simulated task and chat data
const tasks = [
  { title: 'Task 1', description: 'Description 1', assignedTo: 'User 1' },
  { title: 'Task 2', description: 'Description 2', assignedTo: 'User 2' }
];

// Display tasks in the task list
function displayTasks() {
  taskListDiv.innerHTML = '';
  tasks.forEach(task => {
    const taskDiv = document.createElement('div');
    taskDiv.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <p>Assigned to: ${task.assignedTo}</p>
    `;
    taskListDiv.appendChild(taskDiv);
  });
}

// Simulated chat messages (not implemented)
function displayChatMessages() {
  // Display chat messages in the chatBoxDiv
}

// Add event listeners
createTaskBtn.addEventListener('click', () => {
  const newTask = {
    title: 'New Task',
    description: 'New Task Description',
    assignedTo: 'New User'
  };
  tasks.push(newTask);
  displayTasks();
});

// Initial display
displayTasks();

