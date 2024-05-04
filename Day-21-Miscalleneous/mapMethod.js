// map method
let arr = [1, 2, 3, 4, 5];
let square = arr.map((n) => n*n);
console.log(square); // [1, 4, 9, 16, 25]
 
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
let branch = student.map(n => n.branch);
console.log(branch);
let names = student.map(n => n.name);
console.log(names);
