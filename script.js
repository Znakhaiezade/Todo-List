"use strict";

const taskList = [];

// const task = {
//     title: "Learn JavaScript",
//     description: "Practice arrays and functions",
//     priority: 1,
//     date: "2026-10-20"
// };

// taskList.push(task);

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