"use strict";
const taskTitle = document.querySelector("#task-title");
const taskDescription = document.querySelector("#task-description");
const priority = document.querySelector("#priority");
const date = document.querySelector("#date");
const taskList = document.querySelector(".task-list");
const addBtn = document.querySelector(".add-btn");
// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let tasks = [];

//ADD TASK
addBtn.addEventListener("click", function () {
  let task = {
    title: taskTitle.value,
    description: taskDescription.value,
    priority: priority.value,
    date: date.value,
  };
  tasks.push(task);

  //creat task
  let newTask = document.createElement("div");
  newTask.classList.add("task");

  //creat title
  let newTitle = document.createElement("h3");
  newTitle.textContent = task.title;

  //creat description
  let newDescription = document.createElement("p");
  newDescription.textContent = task.description;

  //Task info
  let taskInfo = document.createElement("div");
  taskInfo.classList.add("task-info");

  taskInfo.appendChild(newTitle);
  taskInfo.appendChild(newDescription);

  //creat date
  let newDate = document.createElement("span");
  newDate.classList.add("date");
  newDate.textContent = task.date;

  //creat priority
  let newPriority = document.createElement("span");
  newPriority.classList.add("priority");
  newPriority.textContent = task.priority;

  //task action
  let taskActions = document.createElement("div");
  taskActions.classList.add("task-actions");

  taskActions.appendChild(newDate);
  taskActions.appendChild(newPriority);

  newTask.appendChild(taskInfo);
  newTask.appendChild(taskActions);

  taskList.appendChild(newTask);

  localStorage.setItem("tasks", JSON.stringify(tasks));
});
