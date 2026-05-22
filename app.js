// app.js

const themeBtn = document.getElementById("themeBtn");
const body = document.body;

themeBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    const icon = themeBtn.querySelector("i");

    if(body.classList.contains("light-mode")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});


// TASK ADD
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e)=>{
    if(e.key === "Enter"){
        addTask();
    }
});

function addTask(){

    const text = taskInput.value.trim();

    if(text === "") return;

    const div = document.createElement("div");
    div.className = "task";

    div.innerHTML = `
        <label class="check">
            <input type="checkbox">
            <span></span>
        </label>

        <div class="task-info">
            <h3>${text}</h3>
            <p>Bugungi reja</p>
        </div>

        <div class="badge">Yangi</div>
    `;

    taskList.appendChild(div);

    taskInput.value = "";

    updateProgress();

    div.querySelector("input").addEventListener("change", updateProgress);
}


// CHECKBOX
// ESKI KODNI O'CHIRIB SHUNI QO'Y

document.querySelectorAll(".task input").forEach(input=>{

    input.addEventListener("change", function(){

        const task = this.closest(".task");

        if(this.checked){
            task.classList.add("completed");
        }else{
            task.classList.remove("completed");
        }

        updateProgress();
    });

});

function updateProgress(){

    const allTasks = document.querySelectorAll(".task input");
    const checked = document.querySelectorAll(".task input:checked");

    const percent = allTasks.length
        ? Math.round((checked.length / allTasks.length) * 100)
        : 0;

    document.getElementById("percent").innerText = percent + "%";
    document.getElementById("doneCount").innerText = checked.length;
}


// NAV ACTIVE
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item=>{
    item.addEventListener("click", ()=>{

        navItems.forEach(nav=>{
            nav.classList.remove("active");
        });

        item.classList.add("active");
    });
});