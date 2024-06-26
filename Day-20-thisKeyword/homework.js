// Q1

let arrayAverage = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }
    return sum / arr.length;
};

let arr = [1, 7 ,2, 3, 5, 6];
let avg = arrayAverage(arr);
console.log(avg); // 4

//Q2
let isEven = (n) => {
    if(n % 2 == 0){
        console.log("Even");
    }else{
        console.log("Not even");
    }

    return (n % 2 == 0);
        
};

let evenOrNot2 = isEven(6);
console.log(evenOrNot2); // even , true
let evenOrNot = isEven(5);
console.log(evenOrNot); // false, not even

// Q3
const object = {
    message: "Hello World",
    logMessage2(){
        console.log(this.message);
    },
    key: function logMessage(){
        console.log(this.message);
    },
    key2: () => {
        console.log(this.message);
    }
};

setTimeout(object.key, 1000); // here setTimeout is calling the function, therefore 'this' in key = window
object.key(); // here object is calling the key function therefore 'this' in key = object itself
object.key2();
setTimeout(() => {object.logMessage2()}, 10000); // "Hello World"

setTimeout(object.logMessage2, 2000);
object.logMessage2();

// Q4 
// doubt in Q3 & Q4