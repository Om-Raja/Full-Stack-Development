// setInterval function
console.log("hello there");
let id = setInterval(() => {
    console.log("I am here, I will come after every 2 seconds , Heheheheheh");
}, 2000);

// use smartness hehehe
setTimeout(() => {
    clearInterval(id);
}, 10000);