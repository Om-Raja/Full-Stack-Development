const fs = require("fs"); // requires library

fs.readFile("file.txt", "utf-8", function(err, data){
    console.log(data);
})


// promise

//creating own asynchronus function. 

//It's ugly way because we have parameters
function OmReadFile() {
    fs.readFile("file.txt", 'utf-8', function(err, data ){
        padho(data);
    })
}

function padho(data){
    console.log(data);
}

OmReadFile();

function OmPadho(){
    return new Promise(function(resolve){
        fs.readFile("file.txt", "utf-8", function(err, data){
            resolve(data);
        });
    })
}

OmPadho().then(padho);
