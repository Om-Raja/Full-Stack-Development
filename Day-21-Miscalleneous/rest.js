// rest 
function sum(...args){
    // indefinite number of arguments
    // all of them are stored in an array 'args'
    args.forEach((n)=>{
        console.log(n);
    })

    console.log(`number of elements in the args is ${args.length}`);

    // arguments keyword
    console.log(arguments); // it stores all the argument but it is not an array
    console.log(arguments[2]); // you can use index but you can not apply any array mehtod on arguments

    // arguments.pop(); // error because arguments is not an array

    

}

let ans = sum(1, 2, 3);