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