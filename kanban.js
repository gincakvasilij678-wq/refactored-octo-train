const columns = document.querySelectorAll(".column");

let boardData = JSON.parse(localStorage.getItem("kanbanData")) || {
  todo: [],
  "in-progress": [],
  done: [],
};

let draggedTask = null;
let sourceStatus = null;

document.querySelectorAll(".column__btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const column = btn.closest(".column");
    const status = column.dataset.status;

    const title = prompt("Введите название задачи") || "";
    const cleanTitle = title.trim();
    if (!cleanTitle) return;
    const descr = prompt("Введите описание задачи") || "";
    const priority =
      prompt("Введите приоритет (Высокий/ Средний / Низкий)") || "";
    const deadline = prompt("Срок: 12.12") || "";

    const cleanDescr = descr.trim();
    const cleanDeadline = deadline.trim();
    const cleanPriority = normilizePriority(priority);

    boardData[status].push({
      title: cleanTitle,
      descr: cleanDescr,
      deadline: cleanDeadline,
      priority: cleanPriority,
    });
    renderBoard();
  });
});
function renderBoard() {
  columns.forEach((column) => {
    const status = column.dataset.status;
    const taskList = column.querySelector(".column__tasks");
    taskList.innerHTML = ""; // очищаем колонку перед рендером

    boardData[status].forEach((task, index) => {
      const el = document.createElement("div");
      el.className = "column__task task-kanban";
      el.dataset.index = index;
      el.draggable = true;
      console.log(task)
      el.innerHTML = `
    <h3 class="task-kanban__title">${escapeHtml(task.title)}</h3>
    ${task.descr ? `<p class="task-kanban__descr">${task.descr}</p>` : ""}
    
    <div class="task-kanban__foter">
<span class="task-kanban__priority ${task.priority}">${priorityLabel(task.priority)}</span>
      <span class="task-kanban__deadline">${task.deadline}</span>
    </div>
  `;
      addDragEvents(el);
      taskList.appendChild(el);
    });
    updateCount(column);
  });
  localStorage.setItem("kanbanData", JSON.stringify(boardData));
}

function addDragEvents(taskEl) {
  taskEl.addEventListener("dragstart", (event) => {
    draggedTask = taskEl;
    sourceStatus = taskEl.closest(".column").dataset.status;
    taskEl.classList.add("dragging");
    event.dataTransfer.effectAllowed = "move";
  });

  taskEl.addEventListener("dragend", () => {
    if (draggedTask) draggedTask.classList.remove("dragging");
    draggedTask = null;
  });

  columns.forEach((column) => {
    const taskList = column.querySelector(".column__tasks");
    taskList.addEventListener("dragover", (e) => {
      e.preventDefault();
      column.classList.add("drag-over");
    });

    taskList.addEventListener("dragleave", () => {
      column.classList.remove("drag-over");
    });

    taskList.addEventListener("drop", (e) => {
      e.preventDefault();
      column.classList.remove("drag-over");

      const targerStatus = column.dataset.status;

      if (!draggedTask) return;

      const index = +draggedTask.dataset.index;
      const movedTask = boardData[sourceStatus][index];
      boardData[sourceStatus].splice(index, 1);
      boardData[targerStatus].push(movedTask);
      renderBoard();
    });
  });
}

function updateCount(column) {
  const countEl = column.querySelector(".column__count");
  const status = column.dataset.status;
  countEl.textContent = boardData[status].length;
}

function normilizePriority(value) {
  const v = String(value || "")
    .trim()
    .toLowerCase();

  if (["выс", "высокий", "в", "h", "high"].includes(v)) return "high";
  if (v.includes("н") || v.includes("l")) return "low";
  if (v.includes("м") || v.includes("m")) return "medium";

  return "medium";
}
function priorityLabel(level) {
  return level === "high"
    ? "Высокий приоритет"
    : level === "low"
      ? "Низкий приоритет"
      : "Средний приоритет";
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&apm")
    .replace(/</g, "&lt")
    .replace(/>/g, "&gt");
}
renderBoard();
