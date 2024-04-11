let array = [1, 2, 3, 4 , 5, 6];
// first n elements
let n = 3;
console.log(array.slice(0,3));

// last n elements
console.log(array.slice(-3));
console.log(array);

// string is blanck or not
let str = "";
if(str.length == 0)
{
    console.log("The string is empty.");
}
else{
    console.log("The string is not empty");
}

let str2 = "Om Raja";
if(str2[3] == str2[3].toLowerCase())
{
    console.log("The character is in lowercase");
}
else{
    console.log("The character is not in lowercase");
}

// trim method
let str3 = "   hello   baby     ";
console.log(str3.trim());

// exist or not
if(array.includes(6))
{
    console.log("Yes it has");
}
else{
    console.log("No it doesn't");
}

// part 2 hw

let num = 11;
if ((num % 10) == 0)
{
    console.log("good");
}
else{
    console.log("bad");
}

// q2
/*
let userName = prompt("Enter your name");
let userAge = prompt("Enter your age");
alert(`${userName} is ${userAge} years old`);
*/

// golden string
let str5 = "apple is good";
if(((str5[0] ==  'A') || (str5[0] == 'a')) && str5.length > 5) 
{
    console.log("Golden string");
}
else {
    console.log("Not a golden string");
}

// same last two digit or not

let num1 = 458685;
let num2 = 8658485;

if ((num1 % 100) == (num2 % 100))
{
    console.log(`Same last two digit ${num1 % 100}`);
}
else {
    console.log("Not same last two digit");
}