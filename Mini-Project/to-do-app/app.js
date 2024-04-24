let todo = [];
let request = prompt("Enter the request");
while(true)
{
    if(request.trim() == "quit")
    {
        break;
    }

    if(request.trim() == "add")
    {
        let task = prompt("write the task");
        todo.push(task);
        console.log("Task added");
    }
    else if(request.trim() == "delete")
    {
        let index = prompt("Enter index");
        todo.splice(index, 1);
        console.log("Task deleted");
        
    }
    else if(request.trim() == "list")
    {
        console.log("____________________________");
        for(let i = 0; i < todo.length; i++)
        {
            console.log(i, todo[i]);
        }
        console.log("____________________________");
    }
    else{
        console.log("Invalid request, try again");
    }
    request = prompt("Enter the request");
}