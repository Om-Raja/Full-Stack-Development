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
HigherOrder(function(){console.log("Raja Om")}, 10); // an anonymous function as direct argument