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

function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}
box.classList.add('box');
box.addEventListener("mouseenter", ()=>{
    console.log("Mouse entered in box");
    let colorr = getRandomColor();
    console.log(colorr);
    this.style.backgroundColor = "colorr";
});

para.addEventListener("mouseleave", ()=>{
    console.log("Mouse went out of para");
});

// Keyboard events
let button = document.querySelector("input");
button.addEventListener("keydown", function(event){
    console.log(event);
    console.log(`code = ${event.code} \n key = ${event.key}`);
    if(event.code == "ArrowUp"){
        console.log("Character moves forward");
    } else if(event.code == "ArrowDown"){
        console.log("Character moves backward");
    } else if(event.code == "ArrowLeft"){
        console.log("Character moves left");
    } else if(event.code == "ArrowRight"){
        console.log("Character moves right");
    } else if(event.code == "KeyU"){
        console.log("Chracter moves upward");
    }

});

let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Form submitted");
})