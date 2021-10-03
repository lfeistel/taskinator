var createTaskHandler = function(event) {
  event.preventDefault();
 
  var taskNameInput = document.querySelector("input[name='task-name']");    
  var taskTypeInput = document.querySelector("select[name='task-type']");
  var listItemEl = document.createElement("li");
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  listItemEl.className = "task-item";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput.value + "</h3><span class='task-type'>" + taskTypeInput.value + "</span>";
  listItemEl.appendChild(taskInfoEl);
  tasksToDoEl.appendChild(listItemEl);
};

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

formEl.addEventListener("submit", createTaskHandler);
