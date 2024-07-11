let url = "https://catfact.ninja/fact";
fetch(url)
.then(function(res){
    // console.log(res);
    res.json().then((data)=>{
        // console.log(data);
        console.log(data.fact);
    })
})
.catch((err)=>{
    console.log("Error is", err);
});

fetch(url)
.then((res)=>{
    return res.json();
})
.then((data1)=>{
    console.log(data1.fact);
    return fetch(url);
})
.then((res2)=>{
    return res2.json();
})
.then((data2)=>{
    console.log(data2.fact);
})
.catch((error)=>{
    console.log("Error caught : ", error);
});

console.log("I am at the end of code");

// using API in asynchronous function
async function getFact(){
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
}
getFact();