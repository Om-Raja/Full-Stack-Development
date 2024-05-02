// nested objects
let obj = {
    Om: {
        city: "Saharsa",
        village: "Bhavara"
    },
    Nikita: {
        city: "Ludhiana",
        village: "Chhapra"
    },
    Kashish: {
        city: "Aaron",
        village: "helloworld"
    }
};

console.log(obj);
console.log(obj.Nikita);
console.log(obj.Kashish.village);
obj.Om.village = "Gill pind";
console.log(obj.Om);