let box = document.querySelector("div");
box.classList.add("box");


function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255) ;
        let blue = Math.floor(Math.random() * 255);
        
        let color = `rgb(${red}, ${green}, ${blue})`;
        return color;
    }

    let h3 = document.querySelector('h3');

    let btn = document.querySelector("button");
    btn.addEventListener("click", function(){
        let randomColor = getRandomColor();
        h3.innerText = randomColor;
        box.style.backgroundColor = randomColor;
    });

