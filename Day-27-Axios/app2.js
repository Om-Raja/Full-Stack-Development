let url = "https://catfact.ninja/fact";
let dogApi = "https://dog.ceo/api/breeds/image/random";

let p = document.querySelector('p');
let button = document.querySelector("button");
let dogImg = document.querySelector("#dogImg");
let dogImgBtn = document.querySelector("#dogImgBtn");

async function getFact(){
    try{
        let result = await axios.get(url);
        console.log(result.data.fact);
        p.innerText = result.data.fact;
    }catch(error){
        console.log("error is " , error);
    }
}

async function getDogImg(){
    try{
        let link = await axios.get(dogApi);
        console.log(link);
        dogImg.setAttribute("src", link.data.message);

    }catch(error){
        console.log("Image not found : ", error);
    }
}

button.addEventListener("click", function(){
    getFact();
    console.log("call lag gaya hai getFact ko");
});

dogImgBtn.addEventListener("click", function(){
    getDogImg();
})

console.log("I am the end");