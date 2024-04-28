// object stores multiple information of one identity
let student = {
    Name: "Om Raja",
    CRN: 2215197,
    URN: 2203743,
    state: "Bihar",
    isHosteler: true
    // info are seperated by comma
    // it can contain all type of information such as string , number and boolean etc.
}

// accessing object info
console.log(student.Name);

var CRN = student.CRN;
console.log(CRN);

console.log(student.URN);
console.log(student.state);
console.log(`is he hosteler : ${student.isHosteler}`);