var numTries = 0;


function runIntro(){
  alert("Welcome to the Guessing Game! This will require two players.");
}

function runGetNum1(){
  var numString1 = Prompt("Player 1, please enter a number: ");
  var numInt1 = parseInt(numString1);
  return numInt1;
}

function runGetNum2(){
  var numString2 = Prompt("Player 2, try to guess Player 1's number: ");
  var numInt2 = parseInt(numString2);
  return numInt2;
  numTries++;
}

function compare(){
  if (numInt2 > numInt1){
  alert("That number is too high, Player 2. Try again!");
  } 
  if (numInt2 < numInt1){
  alert("That number is too low, Player 2. Try again!");
  }
  if (numInt2 == numInt1){
    alert("You guessed it! Great Job! You guessed it in " numTries " tries!")
  }
}

