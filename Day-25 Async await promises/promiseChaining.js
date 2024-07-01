let h1 = document.querySelector("h1");
function colorChange(){
    return new Promise(function(resolve, reject){
      let internetSpeed = Math.floor(Math.random()*10 + 1);
      if (internetSpeed > 5){
        resolve(h1.innerText = "> 5Mbps");
      } else{
        reject(h1.innerText = "weak connection");
      }
    });
}

let PromiseObj = colorChange();
PromiseObj.then(()=>{
    h1.style.color = "green";
    console.log("Promise is fulfilled"); 
})
.catch(function(){
    h1.style.color = "red";
    console.log("Promise is rejected");
})