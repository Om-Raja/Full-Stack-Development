console.log("Hey you!");
console.log("Whar are you doing ?");
console.log("all good ?");
console.log("great!");
let pencilPrice = 10;
let scalePrice = 12;
let result = "Total price is : " + pencilPrice + scalePrice + " rupees";
console.log(result);
result = "Total price is : " + (pencilPrice + scalePrice) + " rupees";
console.log(result);
console.log("Total price is :", pencilPrice + scalePrice , "rupees");
console.log(`total price is ${pencilPrice + scalePrice} rupees`);
console.log(`"tttttotal price will be ${pencilPrice + scalePrice} rupees"`);
console.log(1 == "1");
console.log(1 === "1");
console.log(1 === 1);  

// practice question -> traffic light

let color ="yellow";
switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("invalid color");
}

// popcorn price using if else
let size = "K";
if (size === "XL")
{
    console.log("Price is 250");

}
else if(size === "L")
{
    console.log("Price is 200");
}
else if(size === "M"){
    console.log("Price is 100");

}
else if(size ==="S")
{
    console.log("Price is 50");
}
else{
    console.log("OOPs! This size is not available.");
}

// finding good string using if else and logical operator

let str = "aadar";
if((str[0] === "a") && (str.length >  3))
{
    console.log("It's a good string");
}
else{
    console.log("It's not a good string");
}

