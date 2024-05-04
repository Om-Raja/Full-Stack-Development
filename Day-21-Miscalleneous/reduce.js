// reduce method of array in js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = arr.reduce(function(accumulator, ele){
    return (accumulator + ele);
});
// the above method will be called as many times as number of elements in the array.
// accumulator will retain it's value from previous call of the method.

console.log(sum); // output = 55 ✅

// let accumulator2 = 1000;

let diff = arr.reduce((accumulator2, ele)=>{
    return (accumulator2 - ele);
}, 1000); // this is correct approach to give accumulator some initial value

// here initial value of accumulator = 1000

console.log(diff); // expected output : 1000 - 55 = 945, but we get (-53); Why ?? 