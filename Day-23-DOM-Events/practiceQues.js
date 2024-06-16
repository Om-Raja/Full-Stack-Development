//Q1
let para = document.querySelector("p");
para.addEventListener("mouseout", function(){
    //Q1.i mouseout
    console.log("Mouse has moved out of the paragraph");    
    // mouseout event is triggered when the mouse pointer leaves the selected element or its child.
    // while the mouseleave event is triggered only when mouse pointer leaves the selceted element
}); 

//Q1.ii keypress
let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
});
let user = form.elements[0];
user.addEventListener("keypress", function(){
    console.log(`you have pressed ${this.value}`);
});

//Q1. iii scroll
window.addEventListener("scroll", ()=>{
    console.log("You are scrolling through the web");
});

// Q1. iv load

window.addEventListener("load", (event)=>{
    console.log("Everything is loaded in body");
});

// Q2.
let btn = document.querySelector("#btn");
btn.addEventListener("click", function(){
    console.log("You have clicked the button");
    this.style.backgroundColor = "green";
    this.style.color = "#fff";
});

// Q3.
let inp = document.querySelector("#name");
let board = document.querySelector("#editor");

inp.addEventListener("input", function(){
    board.innerHTML = this.value;
})