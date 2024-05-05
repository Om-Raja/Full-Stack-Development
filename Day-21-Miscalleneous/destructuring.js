// Destructuring in js
let friends = ["Om", "Nikita", "Kashish", "abc", "def", "ghi"];

let [Om, Niku, Kahishiya, ...others] = friends;

console.log(Om); // Om
console.log(Niku); // Nikita
console.log(Kahishiya); // Kashish
console.log(others); // [abc, def, ghi]