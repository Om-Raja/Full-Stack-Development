// Homework problems Day-19

// Q3
/* Write a JavaScript function that accepts a list of country names as input and 
returns the longest country name as output. 
Example : country = ["Australia", "Germany", "United States of America"] output : 
"United States of America" */

function longestName(a, b, c){
    if(a.length > b.length)
    {
        return a;
    }
    else if(b.length > c.length)
    {
        return b;
    }
    else{
        return c;
    }
}

let longestTown = longestName("Bhavara", "Patarghat", "Madhepura");
console.log(longestTown);

//Q4
/* Write a JavaScript function to count the number of vowels in a String 
argument. */

function countVowel(str)
{
    let count = 0;
    for(let i = 0; i < str.length; i++)
    {
        if (str[i] == 'a')
        {
            count++;
        }
        else if(str[i] == 'e'){
            count++;
        }
        else if(str[i] == 'i')
        {
            count++;
        }
        else if(str[i] == 'o')
        {
            count++;
        }
        else if(str[i] == 'u')
        {
            count++;
        }
        else if(str[i] == 'A')
        {
            count++;
        }
        else if(str[i] == 'E')
        {
            count++;
        }
        else if (str[i] == 'I')
        {
            count++;
        }
        else if(str[i] == 'O')
        {
            count++;
        }
        else if(str[i] == 'U')
        {
            count++;
        }
    }
    return count;
}

let noOfVowels = countVowel("Hello Baby"); // 3
console.log(noOfVowels);

let noOfVowels2 = countVowel("Hi, I am Om Raja"); // 6
console.log(noOfVowels2);

// Q5
/* Write a JavaScript function to generate a random number within a range 
(start, end). */

function generateRandomNumber(start, end)
{
    let randomNumber = Math.floor(Math.random() * (end-start)) + 1 + start;
    return randomNumber;
}

console.log(generateRandomNumber(20, 25));


// Q2

/* . Write a JavaScript function to extract unique characters from a string. 
Example: str = “abcdabcdefgggh” ans = “abcdefgh” */

function extractUniqueCharacter(str)
{
    let ans = "";
    for(let i = 0; i < str.length; i++)
    {
        if(!(ans.includes(str[i])))
        {
            ans += str[i];
        }
    }
    return ans;
}

let str = "ahldnfcoasfj  a afj af nf ;afoa oa nfsanfo v   idfnbka ";
let uniqueCharacter = extractUniqueCharacter(str);
console.log(uniqueCharacter);

// Q1
/*  Write a JavaScript function that returns array elements larger than a number */
let num1 = 7;
let arr = [93, 9, 29, 1, 9, 0, 3, 2, 9, 87, 92];

function getLargerElement(array)
{
    for(let i = 0; i < array.length; i++)
    {
        if(array[i] > num1)
            console.log(array[i]);
    }
}

getLargerElement(arr);

// done