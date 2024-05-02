// generate random number in js

// step 1
var num = Math.random();
// step 2
num *= 10;
// step 3
num = Math.floor(num);
// step 4
num += 1; // we do this bcz Math.random() generates 0-9, after +1 it becomes 1 to 10

console.log(num); // expected a int between 1 - 10

//generate a random number between 1 - 100
var num2 = Math.random();
num2 *= 100;
num2 = Math.floor(num2);
num2 += 1;
console.log(num2);

// generate a random number between 1 to 1000
var num3 = Math.floor(Math.random() * 1000) + 1;
console.log(num3);