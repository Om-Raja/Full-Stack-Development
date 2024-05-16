const fstat = require('fs');

// promise
function readTheFile(){
    return new Promise(function(resolve){
        fstat.readFile("file.txt", "utf-8", function(err, data){
            resolve(data);
        });
    })
}

function printKaro(data){
    console.log(data);
}

readTheFile().then(printKaro);

// promise can be defined outside an function
let p = new Promise(function(kuchhbhi){
    fstat.readFile('file.txt', 'utf-8', function(err, data){
        kuchhbhi(`second promise ${data}`);
    });
})

console.log(p);

p.then(printKaro)

console.log(p);

// a promise has three state 
// 1. pending
// 2. resolved
// 3. rejected

p.then(function(data){
    console.log(data);
})


