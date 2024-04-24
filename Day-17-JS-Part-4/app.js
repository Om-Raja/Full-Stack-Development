// print sum of all odd numbers from 1 to 15
let sum = null;
for(let i = 1; i <= 15; i += 2)
{
    sum += i;
}
console.log(`Sum of odd numbers = ${sum}`);

// print all even numbers form 2 to 10
for(let i = 2; i <= 10; i += 2)
{
    console.log(i, " ");
}

// print multiplication table of 5
for(let i = 1; i <= 10; i++)
{
    console.log(i * 5);
}

// guess favMovie game

/*
const favMovie = "12th fail";
let guess = prompt("Guess my favourite movie");
while((favMovie != guess))
{
    if (guess == "quit")
    {
        console.log("you have quit")
        break; // break is used for getting out of nearest loop
    }

    guess = prompt("Wrong! try again");
}
if(guess == favMovie)
    console.log("Congrats!");

// nested array using nested loop
var arr = [[1, 2, 3, 5, 6], ["Om", "Nikita", "Kashish"], ["B.tech", "B. Arch", "B.sc"], ["CSE", "IT", "ECE", "CE"]];
for(let i = 0; i < arr.length; i++)
{
    for(let j = 0; j < arr[i].length; j++)
    {
        console.log(arr[i][j]);
    }
}

*/


// for of loop
let arr2 = [1,2,3,4,5];
for(nos of arr2)
{
    console.log(nos);
}

//for of loop on string
for(hello of "Om Raja")
{
    console.log(hello);
}

// nested for of loop
let superheroes = [['Superman', 'Batman', 'Aquaman'], ['spiderman', 'Ironman', 'captain America']];

for(hero of superheroes)
{
    for(realhero of hero) // variable2 of variable1
    {
        console.log(realhero);
    }
}


