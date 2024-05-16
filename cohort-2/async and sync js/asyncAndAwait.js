// async and await keywords
const fstat = require('fs');

let p = new Promise(function(resolve){
    fstat.readFile("file.txt", "utf-8", function(err, data){
        resolve(data);
    });
})

async function print(){ // await keywords are only allowed in async function that's why we need to write 'async' before 'function'

    let value = await p; // if await was not written then value would say "I have a pending promise"
    console.log(value);
}

print();