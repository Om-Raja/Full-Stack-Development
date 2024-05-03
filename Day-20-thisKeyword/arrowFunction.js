// arrow function in JS
// also called fat arrow function

// function 1
let product = (a, b) => {
    return a * b;
};

// function 2
let sub = (a, b) => {
    return (a - b);
};

let result = product(5,6);
console.log(result);

let diff = sub(5, 6);
console.log(diff);

//function 3
let remainder = (a, b) => a / b;

// function 4 
let even = a => (a % 2 == 0);

let ans = remainder(30, 5); // 6
console.log(ans);

let ans2 = even(7); // false
let ans3 = even(8); // true
console.log(ans2);
console.log(ans3);