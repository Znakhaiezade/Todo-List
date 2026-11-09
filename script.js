"use strict";
const taskForm = document.querySelector("#task-form");
const taskTitle = document.querySelector("#task-title");
const taskDescription = document.querySelector("#task-description");
const taskPriority = document.querySelector("#task-priority");
const taskDate = document.querySelector("#task-date");
const taskList = document.querySelector(".task-list");
const addBtn = document.querySelector("#add-btn");
const title = document.querySelector(".title");
const description = document.querySelector(".Description");
const priority = document.querySelector(".priority");
const date = document.querySelector(".date");

addBtn.addEventListener("click", function () {
  taskTitle.value = title;
  taskDescription.value = description;
  taskPriority.value = priority;
  taskDate.value = date;
});
