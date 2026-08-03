const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

showTasks();

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e){
    if(e.key==="Enter"){
        addTask();
    }
});

function addTask(){

    let task = taskInput.value.trim();

    if(task===""){

        alert("Please enter a task");

        return;

    }

    const li=document.createElement("li");

    li.innerHTML=`

    <span>${task}</span>

    <div class="task-buttons">

    <button onclick="completeTask(this)">✔</button>

    <button onclick="editTask(this)">✏</button>

    <button onclick="deleteTask(this)">🗑</button>

    </div>

    `;

    taskList.appendChild(li);

    taskInput.value="";

    saveTasks();

}

function completeTask(button){

    button.parentElement.parentElement.classList.toggle("completed");

    saveTasks();

}

function editTask(button){

    let span=button.parentElement.previousElementSibling;

    let newTask=prompt("Edit Task",span.innerText);

    if(newTask!==null && newTask.trim()!==""){

        span.innerText=newTask;

        saveTasks();

    }

}

function deleteTask(button){

    button.parentElement.parentElement.remove();

    saveTasks();

}

function saveTasks(){

    localStorage.setItem("tasks",taskList.innerHTML);

}

function showTasks(){

    taskList.innerHTML=localStorage.getItem("tasks") || "";

}