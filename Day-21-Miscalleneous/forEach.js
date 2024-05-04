// forEach
let arr = [1, 2, 3, 4];
arr.forEach(function (element){
    console.log(element);
})

function print(ele){
    console.log(ele)
}

arr.forEach(print);

// array of mehtods 
let student = [
    {
        name: "Om",
        branch: "CSE"
    },
    {
        name: "Nikita",
        branch: "ECE"
    },
    {
        name: "Raushan",
        branch: "IT"
    }
];

student.forEach(/*function*/ (ele)=>{
    console.log(ele.branch);
})

student.forEach((ele)=> {
    console.log(ele.name);
})