// Function to add a new task to the list
function addNewTask() {
  const inputElement = document.getElementById('newTask');
  const newTaskText = inputElement.value.trim();

  if (newTaskText !== "") {
      const tasksList = document.getElementById('tasks-list');
      const newTask = document.createElement("li");
      newTask.textContent = newTaskText;

      // Adding delete and update functionality
      newTask.innerHTML += `<span class="actions">
                              <button onclick="deleteTask(this)">Delete</button>
                              <button onclick="updateTask(this)">Update</button>
                           </span>`;

      tasksList.appendChild(newTask);
      inputElement.value = "";
  }
}

// handle key press events
function handleKeyPress(event) {
  if (event.key === 'Enter') {
      addNewTask();
  }
}

// handle "Add" button click event
function handleAddButtonClick() {
  addNewTask();
}

// delete a task
function deleteTask(button) {
  const taskItem = button.parentNode.parentNode;
  taskItem.parentNode.removeChild(taskItem);
}

// update a task
function updateTask(button) {
  const taskItem = button.parentNode.parentNode;
  const newText = prompt("Update the task:", taskItem.firstChild.textContent);

  if (newText !== null) {
      taskItem.firstChild.textContent = newText;
  }
}

// Adding event listeners
document.getElementById('newTask').addEventListener('keypress', handleKeyPress);
document.getElementById('addButton').addEventListener('click', handleAddButtonClick);



