// 28752 no. of digits in the number
let num = 28752;
var count = 0;
let copy = num;
while(copy > 0)
{
copy = Math.floor((copy / 10)); // The interger greater than or equal to the number will be saved
count++;
}
console.log(count);


//sum of digits of a number
let num2 = 287152;
let sum = 0;
var copy2 = num2;
while(copy2 > 0){
    sum = sum + copy2 % 10;
    copy2 = Math.floor(copy2 / 10);
}
console.log(sum);

//factorial of a number
let num3 = 7;
var factorial = 1;
var copy3 = num3;
while(copy3 > 0){
    factorial *= copy3;
    copy3--;
}
console.log(factorial);

// largest number in an array
let array = [3, 5, 2, 7, 8, 9, 0, 2, 1];
var largest = 0;
for(value of array)
{
    if(value > largest)
    {
        largest = value;
    }
}
console.log(largest);