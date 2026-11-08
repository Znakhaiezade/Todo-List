"use strict";

const taskList = [];

const taskTitle = document.getElementById("task-title").value;
const taskDescription = document.getElementById("task-description").value;
const taskPriority = document.getElementById("priority").value;
const taskDate = document.getElementById("date").value;

const newTask = {
    title: taskTitle,
    description: taskDescription,
    priority: taskPriority,
    date: taskDate
};

taskList.push(newTask);