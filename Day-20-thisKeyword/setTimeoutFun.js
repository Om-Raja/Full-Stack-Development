// setTimeout function
console.log("Hi! people");
setTimeout( () => { // defining callback function
    console.log("I am executed now Hahaha")
}, 5000)
console.log("Wait setTimout function must be coming after 4.9 seconds");

function abcd()
{
    console.log("I am also executed hehehehe");
}
setTimeout(abcd, 7005); // using already defined function as callback function