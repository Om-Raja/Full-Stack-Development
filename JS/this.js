// this in global - window
console.log(this);

// in function - window
var fun = function()
{
    console.log(this);
};
fun();

//inside a method - object
var obj = {
    fun2: function(){
        console.log(this);
    }
};
obj.fun2();

// in es5 function inside mehtod = window
var obj2 = {
    fun3: function()
    {
        //method
        var hello2 = function()
        {
            console.log(this);
        }
        hello2();
    }
};
obj2.fun3();

// in es6 function inside a method = object, 
//bcz es6 function inherits the value of 'this' from it's parents

var obj4 = {
    method: function(){
        var funEs6 = () => {
            console.log(this);
        };
        funEs6();
    }
};
obj4.method();

// this is why we always use es6 function inside a mehtod
// and always use es5 function to create a mehtod. 
// if you use es6 function to create a method then the function will take value of 'this' from parent (i.e., global) and "this = window" ho jayega.

// in a constructor = new blank object
function helllo()
{
    console.log(this);
}

var a = new helllo();

// in event listner : value = wo element jispe event listner lagai gai ho

document.querySelector("button")
.addEventListner("click", function(){
    console.log(this);
})