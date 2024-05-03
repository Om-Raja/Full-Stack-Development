// setInterval function
console.log("hello there");
let id = setInterval(() => {
    console.log("I am here, I will come after every 2 seconds , Heheheheheh");
}, 2000);

// use smartness hehehe
setTimeout(() => {
    console.log("I am setTimeout function.")
    console.log("Stopping your setInterval function LoL");
    clearInterval(id);
}, 10000);