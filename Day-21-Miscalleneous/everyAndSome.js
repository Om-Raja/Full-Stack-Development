// every
let array = [2, 4, 6, 8, 10];
let isEven = array.every(n => n%2 == 0);
console.log(isEven); // true

let array2 = [1, 3, 5, 7];
let array3 = [3, 7, 9];
let isOdd = array.every(n => { (n%2 == 0)});
console.log(isOdd) // true


console.log(array3.every((element) => {
    (element % 2 != 0);
}));
