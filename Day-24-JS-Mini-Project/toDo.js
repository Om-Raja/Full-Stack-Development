let addBtn = document.querySelector("button");
let task = document.querySelector("#taskInput");
let ul = document.querySelector("ul");
addBtn.addEventListener("click", function(event){
    console.log(`task is to ${task.value} is added to the list`);
    let newTask = document.createElement("li");
    newTask.innerText = task.value;
    ul.appendChild(newTask);
    
    let delBtn = document.createElement("button");
    delBtn.innerText = "Done";
    delBtn.classList.add("delete");
    newTask.appendChild(delBtn);
        
    task.value=""; // to reset the input box;
});

task.addEventListener("keydown", function(event){
    if(event.code == "Enter"){
        console.log(`task is to ${this.value} is added to the list`);
        let newTask = document.createElement("li");
        newTask.innerText = this.value;
        ul.appendChild(newTask);

        //creating delete button
        let delBtn = document.createElement("button");
        delBtn.innerText = "Done";
        delBtn.classList.add("delete");
        newTask.appendChild(delBtn);
    
        task.value = "";
    }
});

// event delegation 
ul.addEventListener("click", function(event){
    console.log("ul is clicked");
    console.dir(event.target);
    console.log(event.target.nodeName);

    if(event.target.nodeName == "BUTTON"){
        let parent = event.target.parentElement;
        parent.remove();
    }

})