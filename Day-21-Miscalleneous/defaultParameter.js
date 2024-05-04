// default parameter
function abcd(a, b = 2, c = 1){
    return a + b + c;
}

let ans1 = abcd(10); // 13
let ans2 = abcd(10, 5); // 16
let ans3 = abcd(10, 20, 30); // 60

console.log(ans1);
console.log(ans2);
console.log(ans3);