// es5 has three types of function 
// 1. function statement
// 2. function expression
// 3. anonymous function 

function statement(){
    console.log("I am function statement");
}

var fun = function()
{
    console.log('I am function expression');
};

var anonymous = function()
{
    console.log("I am anonymous function");
};

statement();
fun(); // jis variable me store tha wo variable ko call karna hai
anonymous(); // anonymous function doesn't have a name, therefore we need to store it in a variable


// es6 has one type of function but it can be used in three mehtods
// fat arrow function () => {}
// 1. basic fat arrow function
// 2. fat arrow function with one parameter
// 3. fat arrow function with implicit return

var fat = () => {
    console.log("I am basic arrow function");
};

var fatParameter = (parameter) => {
    console.log("I am fat arrow function with one parameter");
    console.log(`Parameter = ${parameter}`);
};

var implicitReturnFat = () => 12;

fat();
fatParameter("Om Raja");
var returnn = implicitReturnFat();
console.log(returnn);