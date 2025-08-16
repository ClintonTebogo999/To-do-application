let taskCount = 0;

document.getElementById("save-task-button").onclick = function () {
  const textarea = document.getElementById("task-input");
  const taskText = textarea.value.trim();
  if (taskText === "") return;

  taskCount += 1;

  const taskDiv = document.createElement("div");
  taskDiv.style.display = "flex";
  taskDiv.style.alignItems = "center";
  taskDiv.style.justifyContent = "space-between";
  taskDiv.style.padding = "10px";
  taskDiv.style.marginBottom = "10px";
  taskDiv.style.borderBottom = "1px solid #eee";

  //created my checkbox and label
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.style.marginRight = "10px";

  const taskLabel = document.createElement("span");
  taskLabel.textContent = taskCount + ". " + taskText;
  taskLabel.style.flex = "1";
  taskLabel.style.whiteSpace = "pre-wrap"; // Allow multi-line
  taskLabel.style.wordBreak = "break-word"; // Break long words
  taskLabel.style.display = "block"; // Make span behave like block for wrapping

  // Checkbox event for marking completed tasks
  checkbox.onchange = function () {
    if (checkbox.checked) {
      taskLabel.style.textDecoration = "line-through";
      taskLabel.style.color = "gray";
    } else {
      taskLabel.style.textDecoration = "";
      taskLabel.style.color = "";
    }
  };

  // Create delete button for each task
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.width = "80px";
  deleteBtn.style.height = "30px";
  deleteBtn.style.marginLeft = "15px";
  deleteBtn.style.background = "red";
  deleteBtn.style.color = "white";
  deleteBtn.style.border = "none";
  deleteBtn.style.borderRadius = "5px";
  deleteBtn.style.cursor = "pointer";
  deleteBtn.onclick = function (e) {
    e.stopPropagation();
    taskDiv.remove();
  };

  // Add checkbox and label to a container for better alignment
  const labelContainer = document.createElement("div");
  labelContainer.style.display = "flex";
  labelContainer.style.alignItems = "center";
  labelContainer.style.flex = "1";
  labelContainer.appendChild(checkbox);
  labelContainer.appendChild(taskLabel);

  taskDiv.appendChild(labelContainer);
  taskDiv.appendChild(deleteBtn);

  document.querySelector(".display-task").appendChild(taskDiv);
  textarea.value = "";
};

document.getElementById("cancel-task-button").onclick = function () {
  document.getElementById("task-input").value = "";
};
