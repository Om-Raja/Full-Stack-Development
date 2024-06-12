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

let box = document.querySelector("div");
let para = document.querySelector("p");

box.classList.add('box');
box.addEventListener("mouseenter", ()=>{
    console.log("Mouse entered in box");
});

para.addEventListener("mouseleave", ()=>{
    console.log("Mouse went out of para");
});
