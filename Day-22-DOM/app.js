// console.dir(document.querySelector("h1"));
// document.querySelector("h1").innerText = "Om Raja";
// console.dir(document.querySelector(".oldImage"));
// let img1 = document.querySelector(".oldImage");
// console.log(img1.src);

// let para = document.querySelector("h2 + p");
// console.log(para.innerText);

// let allPara = document.querySelectorAll("p");
// console.log(allPara);


/*

console.log(document.querySelector("p").innerText); // text that is visible on screen
console.log(document.querySelector("p").innerHTML); // text along with html code 
console.log(document.querySelector("p").textContent); // text in original file

let heading = document.querySelector("h1");
heading.innerHTML = `<u>${heading.innerText}</u>`;

// changing color of all anchor tags inside .public info to yellow 
let anchorCollection = document.querySelectorAll(".pubInfo a");

for(let i = 0; i < anchorCollection.length; i++){
    anchorCollection[i].style.color = "orange";
}

for(a of anchorCollection){
    a.style.color = "green";
}
*/

// we don't manipulate style using DOM because it is done in inline CSS which is not good.



// classList

/*
console.log(heading.classList);

heading.classList.add("mainHeading");
console.log(heading.classList); // mainHeading

heading.classList.add('abc');
console.log(heading.classList);

heading.classList.remove('abc');
console.log(heading.classList); // mainHeading

let abc = heading.classList.contains('abc');
console.log(abc); // false

heading.classList.toggle('abc');
console.log(heading.classList); // adds and return true

heading.classList.toggle('abc');
console.log(heading.classList); // remove and return false
*/


//navigation
// 1. parent 2. children, 3. previousElementSibling 4. nextElementSibling 5. childElementCount


/* 
let div = document.querySelector("div");

console.log(div.parent); // undefined
console.log(div.children); // img, h1, h2, p

console.log(div.childElementCount); // 4

console.log(div.previousElementSibling); // null
console.log(div.nextElementSibling); // div.pubInfo


let img3 = document.getElementById("mainImg");
img3.previousElementSibling.innerText = "Om Raja";
r*/ 

// creating element 
let newPara = document.createElement('p');
newPara.innerText = "Hi, This is Om Raja the Full stack developer ";

newPara.setAttribute('id', "newPara");
console.log(newPara.getAttribute('id'));

let body = document.querySelector("body");
body.appendChild(newPara); // appended in the last of body

newPara.style.color = 'green';
newPara.style.fontSize = '2rem';   

// creating button using createElement

let btn = document.createElement('button');
btn.innerText = "Submit";

let box = document.querySelector('.pubInfo ul');
box.appendChild(btn);
box.append(newPara);
newPara.append(btn);
newPara.removeChild(btn);
newPara.append(" Click me right now");
newPara.prepend("I am hero ");

// insertAdjacentElement(pos, ele);
newPara.insertAdjacentElement('beforebegin', btn);
newPara.insertAdjacentElement('afterbegin', btn);
newPara.insertAdjacentElement('beforeend', btn);
newPara.insertAdjacentElement('afterend', btn);

let realBox = document.getElementByClassName('.pubInfo');

box.removeChild(newPara);

body.removeChild("realBox");
body.remove();