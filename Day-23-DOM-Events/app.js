let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    console.log('Button was clicked');
})
btn.onclick = function(){
    console.log("Hi pro");
}

btn.addEventListener("dblclick", function(){
    console.log("You clicked the button twice");
})