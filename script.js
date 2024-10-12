document.addEventListener("DOMContentLoaded", () => {

  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  function addTask() {
    const taskText = taskInput.value.trim();
    if ( taskText === ""){
      alert("enter a task");
    }else{
      let li = document.createElement("li");
      li.textContent = taskText;
      li.innerHTML =taskText.value;
      taskList.appendChild(li)
      let button = document.createElement('button');
      button.textContent = "Remove";
      button.className = 'remove-btn';
      addButton.onclick = button;
      button.appendChild(li);
      li.append(taskList);
      taskInput.value === '';
    }
  }

 addTask();
});