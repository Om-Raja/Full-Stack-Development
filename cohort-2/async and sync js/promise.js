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