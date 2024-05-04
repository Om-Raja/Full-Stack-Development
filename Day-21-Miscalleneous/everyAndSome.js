// every
let array = [2, 4, 6, 8, 10];
let isEven = array.every(n => n%2 == 0);
console.log(isEven); // true

let array2 = [1, 3, 5, 7];
let array3 = [3, 7, 9];
let isOdd = array3.every((n)=>{ 
    return (n%2 != 0)});
console.log(isOdd) // true
let isOdd2 = array2.every((n) => {
    return (n % 2 != 0);
});
console.log(isOdd2);