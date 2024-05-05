// rest 
function sum(...args){
    // indefinite number of arguments
    // all of them are stored in an array 'args'
    args.forEach((n)=>{
        console.log(n);
    })

    console.log(`number of elements in the args is ${args.length}`);

    let result = args.reduce((acc, ele)=> (acc + ele), 0);

    // arguments keyword
    console.log(arguments); // it stores all the argument but it is not an array
    console.log(arguments[2]); // you can use index but you can not apply any array mehtod on arguments

    // arguments.pop(); // error because arguments is not an array
    return result;


}

let ans = sum(1, 2, 3, 4, 5);
console.log(`sum is ${ans}`);