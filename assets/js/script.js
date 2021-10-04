var taskFormHandler = function(event) {
  event.preventDefault();
 
  var taskDataObj = {
    name : document.querySelector("input[name='task-name']").value,
    type : document.querySelector("select[name='task-type']").value
  };
  createTaskEl(taskDataObj);
};

var createTaskEl = function(taskDataObj) {
  var listItemEl = document.createElement("li");
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  listItemEl.className = "task-item";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);
  tasksToDoEl.appendChild(listItemEl);
}

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

formEl.addEventListener("submit", taskFormHandler);
