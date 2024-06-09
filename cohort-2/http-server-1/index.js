// first use npm init in this folder to create package.json file to create it a http server
// Then make a js file
const express = require("express");
const app = express(); // returns an object
const port = 3000;

app.get('/', function(req, res){
    res.send("Hello baby");
})
app.get('/route-one', function(req, res){
    res.send("Hi, this is Om Raja");
})

app.listen(port);