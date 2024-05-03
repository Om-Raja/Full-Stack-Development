// practice question 
// an arrow function that returns square of a number

let square = n => Math.pow(n, 2);

console.log(square(5)); // 25
console.log(square(40)); // 1600


// a function that prints "Hello World" 5 times at interval of 2 sec each

let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout( ()=>{
    clearInterval(id)
}, 11000);