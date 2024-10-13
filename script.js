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
      let remove = document.createElement('button');
      remove.textContent = "Remove";
      remove.className = 'remove-btn';
      remove.onclick = taskList.textContent = '';
      button.appendChild(li);
      li.append(taskList);
      taskInput.value === '';
      classList.add
    }
  }


   addTask();

 addButton.addEventListener('click', ()=>{
   addTask
 });
 taskInput.addEventListener('keypress', ()=>{
   if (event.key === Enter){
    addTask
   }else{

   }
 });
});
