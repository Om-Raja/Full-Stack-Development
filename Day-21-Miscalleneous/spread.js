// spread
// It expands an iterable into multiple values

let arr = [2, 3, 5, "He", "She", "hi", 2.3, 5234, true];
console.log(...arr);
console.log(arr);

let arr2= [1, 2, 0, 5, 9];
let min = Math.min(...arr2);
console.log(min);

// spread with arrays
let newArr = [...arr];
console.log(...newArr);

let str = [..."Om Raja"];
console.log(str);

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];
let nums = [...even, ...odd];
console.log(nums);
console.log(...nums);

// spread with object literals
let obj = {
    name: "Om Raja",
    branch: "CSE",
    crn: 2215197
}

let obj2 = {...obj, urn: 2203743};
console.log(obj2);

let obj3 = {...arr};
console.log(obj3); // index of elements will become keys in object

let obj4 = {..."Nikita"};
console.log(obj4);
// console.log(...obj); // can not execute
console.log(...arr); // executable