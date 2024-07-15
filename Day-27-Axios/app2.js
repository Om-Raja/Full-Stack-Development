let url = "https://catfact.ninja/fact";
let p = document.querySelector('p');
let button = document.querySelector("button");

async function getFact(){
    try{
        let result = await axios.get(url);
        console.log(result.data.fact);
        p.innerText = result.data.fact;
    }catch(error){
        console.log("error is " , error);
    }
}

button.addEventListener("click", function(){
    getFact();
    console.log("call lag gaya hai getFact ko");
})