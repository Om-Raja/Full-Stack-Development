let addBtn = document.querySelector("button");
let task = document.querySelector("#taskInput");
let ul = document.querySelector("ul");
addBtn.addEventListener("click", function(event){
    console.log(`task is to ${task.value} is added to the list`);
    let newTask = document.createElement("li");
    newTask.innerText = task.value;
    ul.appendChild(newTask);
    
    task.value=""; // to reset the input box;
});

task.addEventListener("keydown", function(event){
    if(event.code == "Enter"){
        console.log(`task is to ${this.value} is added to the list`);
        let newTask = document.createElement("li");
        newTask.innerText = this.value;
        ul.appendChild(newTask);
    
        task.value = "";
    }
});