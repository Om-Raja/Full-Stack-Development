// console.log("Hey you!");
// console.log("Whar are you doing ?");
// console.log("all good ?");
// console.log("great!");
// let pencilPrice = 10;
// let scalePrice = 12;
// let result = "Total price is : " + pencilPrice + scalePrice + " rupees";
// console.log(result);
// result = "Total price is : " + (pencilPrice + scalePrice) + " rupees";
// console.log(result);
// console.log("Total price is :", pencilPrice + scalePrice , "rupees");
// console.log(`total price is ${pencilPrice + scalePrice} rupees`);
// console.log(`"tttttotal price will be ${pencilPrice + scalePrice} rupees"`);
// console.log(1 == "1");
// console.log(1 === "1");
// console.log(1 === 1);  

// // practice question -> traffic light

// let color ="yellow";
// switch (color) {
//     case "red":
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Slow down");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("invalid color");
// }

// // popcorn price using if else
// let size = "K";
// if (size === "XL")
// {
//     console.log("Price is 250");

// }
// else if(size === "L")
// {
//     console.log("Price is 200");
// }
// else if(size === "M"){
//     console.log("Price is 100");

// }
// else if(size ==="S")
// {
//     console.log("Price is 50");
// }
// else{
//     console.log("OOPs! This size is not available.");
// }

// // finding good string using if else and logical operator

// let str = "aadar";
// if((str[0] === "a") && (str.length >  3))
// {
//     console.log("It's a good string");
// }
// else{
//     console.log("It's not a good string");
// }

// let num2 = 0;
// if(num2)
// {
//     console.log("It's not zero");
// }
// else{
//     console.log("It is zero");
// }

// // using switch case to print day of the week

// let day = 7;
// switch(day)
// {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3: 
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5: 
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7: 
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid input");
// }

// // alerts and prompt
// let YourRollNo = prompt("Enter your roll no.");
// alert("Something is wrong");
// console.log("roll no. = ", YourRollNo);

// let firstName = prompt("Eneter your first name");
// let lastName = prompt("Enter your last name");
// console.log("Hi", firstName, lastName);
// let msg = "hi " + firstName + " " + lastName;
// alert(msg);

// // methods in JS
// let stringg = "    I love my papa   ";
// console.log(stringg);
// console.log(stringg.trim());
// let indexx = stringg.indexOf("papa");
// console.log(indexx);
// console.log(stringg.indexOf("papa"));
// console.log(stringg.indexOf("t"));
// console.log(stringg.indexOf("love"));
// console.log((stringg.trim()).indexOf("papa"));
// console.log(stringg.trim().indexOf("papa"));

// // slice method
// let str = "I love my papa ";
// console.log(str.slice(10)); // "papa"
// console.log(str.slice(2, str.length)); // "love my papa"
// console.log(str.slice(2,9)); // "love my"
// console.log(str.slice(-5)); // "papa"
// console.log(str.replace("papa", "papa and maa and sister and brother")); //I love my papa and maa and sister and brother
// console.log(str.repeat(5));


// // practice questions
// let msg = "help!";
// console.log(msg.trim().toUpperCase());

// let college = "ApnaCollege";
// console.log(college.slice(-7).replace("l","t").replace("l", "t"));
// let info = ["Om Raja", 21, 5.9];
// console.log(info);
// let friends = ["Nikita", "Om", "Kashish", "Mani", "Roshan", "Aastha", 'Gautam'];
// console.log(friends);
// console.log(friends[0], friends[1]);
// console.log(info.length);
// console.log(friends.length);
// console.log(college.length);
// console.log(typeof college);

// // array methods
// friends.push("Tejas");
// console.log(friends);
// friends.pop();
// console.log(friends);
// console.log(friends.pop());
// console.log(friends);
// friends.unshift("myself");
// console.log(friends);
// friends.shift();
// console.log(friends);

// let months = ["january", "july", "march", "august"];
// months.shift();
// months.shift();
// months.unshift("june");
// months.unshift("july");
// console.log(months);

// console.log(friends.indexOf("Nikita"));
// console.log(friends.includes("Om"));
// console.log(friends.includes("Rishabh"));

// //concatenation of array
// let mix = friends.concat(info);
// console.log(mix);

// // reverse of an array
// console.log(friends.reverse().reverse());
// console.log(friends);

// splice method
// this is used to remove/replace/add item at any place.
/*
let friends = ["Om", "Nikita", "Kashish", "Mansi", "Khushali"];
friends.splice(4);
console.log(friends);
friends.splice(3, 0);
console.log(friends);
friends.splice(3,1);
console.log(friends);
friends.splice(2, 0, "Mansi");
console.log(friends);
friends.splice(2, 2, "Kashish", "Mansi");
console.log(friends);

friends.sort();
console.log(friends);

let chars = ['a', 'b', 'd', 'a', 'z', 'A', 'F'];
console.log(chars.sort());
console.log(chars);
let nos = ['156', '42', '24', '4854'] ;
console.log(nos.sort());


let months = ["january", "july", "march", "august"];
console.log(months.splice(0,2,"july", "june"));
console.log(months);

let languages = ["c", "c++", "html","javascript", "python", "java", "c#", "sql"];
console.log(languages.reverse().indexOf("javascript"));

let arr1 = [1];
let arr2 = [1];
console.log(arr1 == arr2);
let arr3 = arr1;
console.log(arr1 == arr3);
console.log(arr1 === arr3);
// arr3 = [1,2]; // this is not changing the value , this is assigning new array 
arr3.push(3);
arr3.unshift(2);
arr3.splice(0, 0, 44); 
console.log(arr1); // [44, 2, 1, 3]
arr4 = [1, 2];
arr5 = arr4;
console.log(arr5);
arr5 = [7, 8, 9];
console.log(arr5);
*/


// nested array :
let arr1 = [[1,2], [3,4], [4,5]];
console.log(arr1);
console.log(arr1.length); // 3 arrays
console.log(arr1[0].length); // 2 elemetns

// tic tac toe
let ticTacToe =[['X', null, 'O'], [null, 'X', null], ['O', null, 'X']];
console.log(ticTacToe[1]);
console.log(ticTacToe[1][2]);
ticTacToe[1][2] = 'X';
console.log(ticTacToe[1][2]);
console.log(ticTacToe[1]);
