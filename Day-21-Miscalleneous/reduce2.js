// find max of an array using reduce method
let arr = [1, 2, 3, 5, 8, 9,  1, 0, 100, 50, 9];

let max = arr.reduce((accumulator, ele)=>{
    if(ele > accumulator){
        return ele;
    }else{
        return accumulator;
    }
});
console.log(max);