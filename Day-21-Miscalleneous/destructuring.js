// Destructuring in js
let friends = ["Om", "Nikita", "Kashish", "abc", "def", "ghi"];

let [Om, Niku, Kahishiya, ...others] = friends;

console.log(Om); // Om
console.log(Niku); // Nikita
console.log(Kahishiya); // Kashish
console.log(others); // [abc, def, ghi]

// destructuring in object
let obj = {
    name: "Om Raja",
    crn: 2215197,
    urn: 2203743,
    branch: "CSE",
    home: "Bhavara",
    college: "Gndec",
    // isHosteler: false 
};

let {name, branch, ghar} =obj;
console.log(name, branch, ghar); // Om Raja, CSE, undefined

let {home: Myghar, college: chutiyapa, isHosteler = true} = obj;
console.log(Myghar, chutiyapa, isHosteler); // bhavara, gndec, true