// It is good practice to name the constructor function with captital letter first
function Constructor(name, age, crn, branch){
    this.name = name; // In the context of the constructor function, "this" refers to new object that is being created.
    this.age = age;
    this.crn = crn;
    this.branch = branch;
}
 
var Om = new Constructor("Om", 21, 2215197, "CSE"); // "new" is used to create new instances of the 'Constructor' object
var Niki = new Constructor("Nikita", 19, 2217050, "ECE");

console.log(Niki.crn);
console.log(Om.branch);

console.log(Niki);

// prototypal inheritance
// It allows you to add new properties or methods to all existing objects or an object constructor

Constructor.prototype.printMyName = function(){
    console.log(this.name);
}

console.log(Niki.printMyName());