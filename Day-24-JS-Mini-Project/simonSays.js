let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let highestScore = 0;

const allBtns = ["firstBtn", "secondBtn", "thirdBtn", "fourthBtn"];

document.addEventListener("keypress", function(event){
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

let heading = document.querySelector("h4");
function levelUp(){

    userSeq = [];

    if(level > highestScore){
        highestScore = level;
        document.querySelector("#highestScore").innerText = `Highest Score = ${highestScore}`;
    }

    level++;
    heading.innerText = `Level ${level}`;

    let randomIndex = Math.floor(Math.random()*3);
    let randomBtn = allBtns[randomIndex];
    let randomBtnObj = document.querySelector(`.${randomBtn}`);
    
    setTimeout(function(){
        btnFlash(randomBtnObj);
    }, 500);
    // btnFlash(randomBtnObj);
    gameSeq.push(randomBtn);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
}

function checkAns(index){
    console.log(gameSeq[index]);
    console.log(userSeq[index]);
    if(userSeq[index] === gameSeq[index]){
        if(userSeq.length == gameSeq.length){
            levelUp();
        }
    }else{
        heading.innerText = `Game Over ! Your score is ${level - 1} \nPress any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "antiquewhite";
        }, 1000);
        reset();
    }
}
function btnPress(){
    let btn = this;
    userFlash(btn);

    let userPressed = btn.getAttribute("id");
    userSeq.push(userPressed);

    checkAns(userSeq.length - 1);
}

let allBoxes = document.querySelectorAll(".button");
for(btn of allBoxes){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}