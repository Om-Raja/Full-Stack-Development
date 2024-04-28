// object stores multiple information of one identity
let student = {
    Name: "Om Raja",
    CRN: 2215197,
    URN: 2203743,
    state: "Bihar",
    isHosteler: true
    // info are seperated by comma
    // it can contain all type of information such as string , number and boolean etc.
};

// accessing object info
console.log(student.Name);

var CRN = student.CRN;
console.log(CRN);

console.log(student.URN);
console.log(student.state);
console.log(`is he hosteler : ${student.isHosteler}`);

// another way of declaring an object
var student2 = new Object();
student2 = {
    Name: "Nikita",
    crn: 2217050,
    urn: 2203739,
    state: "Bihar",
    isHosteller: false
};

console.log(student2.Name);
console.log(student2.crn);
console.log(student2.urn);
console.log(student2.state);
console.log(`is she hosteller : ${student2.isHosteller}`);