let h2 = document.querySelector("h2");

// function colorChange(color, delay, nextColorFunction){
//     setTimeout(function(){
//         h2.style.color = color;
//         if(nextColorFunction){
//             nextColorFunction();
//         }
//     }, delay);
// }

// colorChange("red", 1000, ()=>{
//     colorChange("blue", 1000, ()=>{
//         colorChange("green", 1000, ()=>{
//             colorChange("orange", 1000, ()=>{
//                 colorChange("black", 1000);
//             });
//         });
//     });
// });

// // promise
// function colorChangeByPromise(){
//     return new Promise(function(resolve, reject){
//         let internetSpeed = Math.floor(Math.random()*10 + 1);
//         if(internetSpeed > 5){
//             resolve(h2.style.color = "pink");
//         }else{
//             reject(console.log("failure"));
//         }
//     });
// }

// colorChangeByPromise();
// let variable = colorChangeByPromise();
// variable.then(function(){
//     h2.style.color = "green";
//     console.log("Promise fulfilled");
// }).catch(function(){
//     h2.style.color = "red";
//     console.log("promise is rejected");
// })

function changeColor(color, delay){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            h2.style.color = color;
            // resolve("color changed");
        }, delay);
    });
}

//.then wala part chalane ke liye 'resolve' wala code execute hona chahiye. Agar 'resolve'
// ke andar kuchh nhi likha hai toh .then nhi chalega.

changeColor("red", 1000).then(function(){
    console.log("red done");
    return changeColor("blue", 1000);
})
.then(function(){
    console.log("blue was done");
    return changeColor("green", 1000);
})
.then(function(){
    console.log("green was done");
    return changeColor("yellow", 1000);
})
.then(()=>{
    console.log("yellow as done");
    return changeColor("orange", 1000);
})
.then(()=>{
    console.log("Orange was done");
    return changeColor("skyblue", 1000);
})
.then(()=>{
    console.log("skyblue is done");
    return changeColor("pink", 1000);
})
.then(()=>{
    console.log("pink was completed");
})
.catch((error)=>{
    console.log("some error occured");
    console.log(error);
})
