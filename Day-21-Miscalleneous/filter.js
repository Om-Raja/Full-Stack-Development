// filter in js
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let even = array.filter(n => n%2 == 0);
console.log(even);

let odd = array.filter(n => !(n % 2 == 0));
console.log(odd);

let greaterThan5 = array.filter(n => n>5);
console.log(greaterThan5);