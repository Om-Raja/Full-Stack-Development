// Higher order function
// It is a function which returns a function
// It is a function which takes one or more than one function as it's argument
function HigherOrder(fun, count) // fun() is wrong parameter, fun is correct parameter
{
    for(let i = 1; i <= count; i++)
    {
        fun();
    }
}

function print() {
    console.log("Om Raja");
}

HigherOrder(print, 4); // print() is syntax error, so pass print as argument
 // or
HigherOrder(function(){console.log("Raja Om")}, 2); // an anonymous function as direct argument

//factory function - Higher order function

function oddOrEvenTest(request)
{
    if(request.trim() == "even")
    {
        return function even(n) // function will run even if you name it or not
        {
            console.log(n % 2 == 0);
        }
    }
    else if (request.trim() == "odd")
    {
        function odd(n){
            console.log(!(n % 2 == 0));
        }
        return odd;
    }
}

let request = "even";
let res = oddOrEvenTest(request);
res(4);
let res2 = oddOrEvenTest("odd");
res2(4);
