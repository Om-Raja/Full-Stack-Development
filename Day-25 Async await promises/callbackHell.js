let h2 = document.querySelector("h2");

function colorChange(color, delay, nextColorFunction){
    setTimeout(function(){
        h2.style.color = color;
        if(nextColorFunction){
            nextColorFunction();
        }
    }, delay);
}

colorChange("red", 1000, ()=>{
    colorChange("blue", 1000, ()=>{
        colorChange("green", 1000, ()=>{
            colorChange("orange", 1000, ()=>{
                colorChange("black", 1000);
            });
        });
    });
});

// promise
function colorChangeByPromise(){
    return new Promise(function(resolve, reject){
        let internetSpeed = Math.floor(Math.random()*10 + 1);
        if(internetSpeed > 5){
            resolve(h2.style.color = "pink");
        }else{
            reject(console.log("failure"));
        }
    });
}

colorChangeByPromise();
let variable = colorChangeByPromise();
variable.then(function(){
    h2.style.color = "green";
    console.log("Promise fulfilled");
}).catch(function(){
    h2.style.color = "red";
    console.log("promise is rejected");
})