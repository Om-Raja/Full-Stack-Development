// check if all numbers are multiple of 10 in an array
let arr1 = [10, 20, 30, 50, 500];
let arr2 = [10, 33, 30, 4, 50, 23];

let ans = arr1.every((ele)=> {
    return (ele % 10 == 0);
});

let ans2 = arr2.every((ele)=>{
    return (ele % 10 == 0);
});

console.log(ans); // yes
console.log(ans2); //No 


// a function to find min in an array
function getMin(arr){
    let min = arr.reduce((acc, ele) => {
        if(acc < ele){
            return acc;
        }else{
            return ele;
        }
    });

    return min;
}

let min1 = getMin(arr1); // 10
let min2 = getMin(arr2); // 4
console.log(min1);
console.log(min2);