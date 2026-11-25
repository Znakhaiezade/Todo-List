"use strict";

// ADD TASK ELEMENTS
const taskTitle = document.querySelector("#task-title");
const taskDescription = document.querySelector("#task-description");
const priority = document.querySelector("#priority");
const date = document.querySelector("#date");

const taskList = document.querySelector(".task-list");
const addBtn = document.querySelector(".add-btn");

// LOCAL STORAGE
let tasks = JSON.parse(localStorage.getItem("tasks")) || [
  {
    title: "Learn JavaScript",
    description: "Practice arrays and functions",
    priority: "1",
    date: "2026-10-20",
  },
  {
    title: "Read a Book",
    description: "Read 20 pages of a novel",
    priority: "3",
    date: "2026-10-22",
  },
  {
    title: "Exercise",
    description: "Do a 30-minute home workout",
    priority: "2",
    date: "2026-10-20",
  },
];

// FILTER ELEMENTS
const priorityFilter = document.querySelector("#Priority-filter");
const dateFilter = document.querySelector("#date-filter");

priorityFilter.addEventListener("input", filterTasks);
dateFilter.addEventListener("input", filterTasks);

// EDIT ELEMENTS
const modal = document.querySelector(".modal");

const editTitle = document.querySelector("#edit-title");
const editDescription = document.querySelector("#edit-description");
const editPriority = document.querySelector("#edit-priority");
const editDate = document.querySelector("#edit-date");

const saveBtn = document.querySelector("#save-btn");
const cancelBtn = document.querySelector("#cancel-btn");

let editingTaskIndex;

// FILTER FUNCTION
function filterTasks() {
  const priorityFilterValue = priorityFilter.value;
  const dateFilterValue = dateFilter.value;

  const allTasks = document.querySelectorAll(".task");

  for (let i = 0; i < allTasks.length; i++) {
    const taskPriority = allTasks[i].querySelector(".priority").textContent;

    const taskDate = allTasks[i].querySelector(".date").textContent;

    if (
      (priorityFilterValue === "" || priorityFilterValue === taskPriority) &&
      (dateFilterValue === "" || dateFilterValue === taskDate)
    ) {
      allTasks[i].style.display = "flex";
    } else {
      allTasks[i].style.display = "none";
    }
  }
}

// RENDER TASKS FUNCTION
function renderTasks() {
  taskList.textContent = "";

  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];

    // CREATE TASK
    let newTask = document.createElement("div");
    newTask.classList.add("task");

    // CREATE TITLE
    let newTitle = document.createElement("h3");
    newTitle.textContent = task.title;

    // CREATE DESCRIPTION
    let newDescription = document.createElement("p");
    newDescription.textContent = task.description;

    // TASK INFO
    let taskInfo = document.createElement("div");
    taskInfo.classList.add("task-info");

    taskInfo.appendChild(newTitle);
    taskInfo.appendChild(newDescription);

    // CREATE DATE
    let newDate = document.createElement("span");
    newDate.classList.add("date");
    newDate.textContent = task.date;

    // CREATE PRIORITY
    let newPriority = document.createElement("span");
    newPriority.classList.add("priority");
    newPriority.textContent = task.priority;

    // EDIT BUTTON
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.type = "button";

    // DELETE BUTTON
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.type = "button";

    // EDIT EVENT
    editBtn.addEventListener("click", function () {
      editingTaskIndex = i;

      editTitle.value = tasks[i].title;
      editDescription.value = tasks[i].description;
      editPriority.value = tasks[i].priority;
      editDate.value = tasks[i].date;

      modal.classList.remove("hidden");
    });

    // DELETE EVENT
    deleteBtn.addEventListener("click", function () {
      tasks.splice(i, 1);

      localStorage.setItem("tasks", JSON.stringify(tasks));

      renderTasks();
    });

    // TASK ACTIONS
    let taskActions = document.createElement("div");
    taskActions.classList.add("task-actions");

    taskActions.appendChild(newDate);
    taskActions.appendChild(newPriority);
    taskActions.appendChild(editBtn);
    taskActions.appendChild(deleteBtn);

    // APPEND ELEMENTS
    newTask.appendChild(taskInfo);
    newTask.appendChild(taskActions);

    taskList.appendChild(newTask);
  }

  filterTasks();
}

// ADD TASK EVENT
addBtn.addEventListener("click", function () {
  let task = {
    title: taskTitle.value,
    description: taskDescription.value,
    priority: priority.value,
    date: date.value,
  };

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  renderTasks();

  taskTitle.value = "";
  taskDescription.value = "";
  priority.value = "";
  date.value = "";
});

// SAVE EDIT EVENT
saveBtn.addEventListener("click", function () {
  if (editingTaskIndex === undefined) {
    return;
  }

  tasks[editingTaskIndex] = {
    title: editTitle.value,
    description: editDescription.value,
    priority: editPriority.value,
    date: editDate.value,
  };

  localStorage.setItem("tasks", JSON.stringify(tasks));

  renderTasks();

  modal.classList.add("hidden");

  editingTaskIndex = undefined;
});

// CANCEL EDIT EVENT
cancelBtn.addEventListener("click", function () {
  modal.classList.add("hidden");

  editingTaskIndex = undefined;
});

// SHOW SAVED TASKS WHEN PAGE LOADS
renderTasks();
