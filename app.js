let btn = document.querySelectorAll(".btn");
// btn.onclick = ()=>{
//     console.log("Button was clicked");
// }

function btnclick(){
    // console.log("Button was clicked");
    alert("You are hacked");
}


for(each of btn){
    each.onclick = btnclick;
    each.onmouseenter = function(){
        console.log("U entered into a button");
    }
}