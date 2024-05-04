// every
let array = [2, 4, 6, 8, 10];
let isEven = array.every(n => n%2 == 0);
console.log(isEven); // true

let array2 = [1, 3, 5, 7];
let array3 = [3, 7, 9];
let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let isOdd = array3.every((n)=>{ 
    return (n%2 != 0)});
console.log(isOdd) // true
let isOdd2 = array2.every((n) => {
    return (n % 2 != 0);
});
console.log(isOdd2);

//some method
let isThereEven = array.some(function(n){
    return (n % 2 == 0); // true
});

let isThereOdd = array.some(function(n){
    return (n % 2 != 0); // false
});

let isThereEven4 = array4.some((n) => {
    return (n % 2 == 0); // true
});

let isThereOdd4 = array4.some(function(ele){
    return (ele % 2 != 0); // true
})

console.log(isThereEven); // true
console.log(isThereOdd); // false
console.log(isThereEven4); // true
console.log(isThereOdd4); // true
