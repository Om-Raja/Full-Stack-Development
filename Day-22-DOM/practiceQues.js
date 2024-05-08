// practice quesiton

let body = document.querySelector('body');

//Q1
let redPara = document.createElement('p');
redPara.innerText = "Hey! I am red";
// redPara.style.color = 'red';
redPara.classList.add("red");

body.prepend(redPara);

// Q2
let h3 = document.createElement('h3');
h3.innerText = "I am blue h3";
// h3.style.color = 'blue';
h3.classList.add('h33');

redPara.insertAdjacentElement('afterend', h3);

// Q3
let div = document.createElement('div');
h3.insertAdjacentElement('afterend', div);

div.classList.add('divv');

// div.style.backgroundColor = 'pink';
// div.style.border = "2px solid black";

// div.innerHTML = "<h1>Hi,I'm in a div</h1> <br> <p>ME TOO </p>";

let h1 = document.createElement('h1');
h1.innerText = "Hi, I'm in Div";

let para = document.createElement('p');
para.innerText = "ME TOO";

div.append(h1);
div.append(para);
