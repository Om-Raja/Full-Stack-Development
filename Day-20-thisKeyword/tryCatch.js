// try and catch 
console.log("Before try block");
try{
    console.log(a + b); // a and b are not defiined so it will throw error
} catch(error){
    console.log("a and b are not defined error occurs");
    console.log(error); // error was thrown by try block which is caught by catch block and printed here
}
console.log("After try block");
console.log("Execution didn't stop");