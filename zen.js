const add = document.getElementById("add");
const newItem = document.getElementById("newItem");
const clearDone = document.getElementById("clearDone");
const priority = document.getElementById("priority");
const high = document.getElementById("high");
const medium = document.getElementById("medium");
const low = document.getElementById("low");

count = 0;
function createNewTask() {
  if (newItem.value === "") {
    alert("Please enter the task");
    return;
  }

  if (priority.value === "") {
    alert("Please choose priority");
    return;
  }

  count++;
  newTask = newItem.value;

  const container = document.createElement("div");
  if (priority.value === "high") {
    high.appendChild(container);
  } else if (priority.value === "medium") {
    medium.appendChild(container);
  } else if (priority.value === "low") {
    low.appendChild(container);
  }

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", `a${count}`);
  container.appendChild(checkbox);

  const checkboxes = [];
  checkboxes.push(checkbox);

  const label = document.createElement("label");
  label.setAttribute("for", `a${count}`);
  label.textContent = newTask;
  container.appendChild(label);

  const edit = document.createElement("button");
  edit.textContent = "edit";
  container.appendChild(edit);

  const remove = document.createElement("button");
  remove.textContent = "remove";
  container.appendChild(remove);
  container.appendChild(document.createElement("br"));

  newItem.value = "";
  priority.value = "";

  remove.addEventListener("click", () => {
    container.remove();
  });

  checkbox.addEventListener("click", () => {
    checkbox.checked
      ? (label.style.textDecoration = "line-through")
      : (label.style.textDecoration = "none");
  });

  clearDone.addEventListener("click", () => {
    checkboxes.forEach((cb) => {
      if (cb.checked) {
        cb.parentElement.remove();
      }
    });
  });
}

add.addEventListener("click", createNewTask);

newItem.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    priority.focus();
  }
});

priority.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    createNewTask();
  }
});

label.addEventListener("dblclick", () => {
  // Create an input field
  const input = document.createElement("input");
  input.type = "text";
  input.value = label.textContent;

  // Replace the label with the input
  label.replaceWith(input);
  input.focus();

  // Save when pressing Enter
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      label.textContent = input.value;
      input.replaceWith(label);
    }
  });

  // Save when clicking away
  input.addEventListener("blur", () => {
    label.textContent = input.value;
    input.replaceWith(label);
  });
});
