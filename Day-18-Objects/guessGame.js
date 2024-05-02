// guess game
const MAX = prompt("Enter the Max no.");
const RANDOM = Math.floor(Math.random() * MAX) + 1;
var guess = prompt("Guess the number or \"quit\" to exit");

while(true)
{
  if(guess.trim() == "quit")
    break;

  if(guess == RANDOM)
  {
    console.log(`You are right ${RANDOM} is the correct answer`);
    break;
  }
  else{
    guess = prompt("Wrong! guess try again or \"quit\" ");
  }
}