// Where the computer picks what it will use as random guess. The split is a method to break up the string and pick one letter at a time. 
var computerChoices = ("abcdefghijklmnopqrstuvwxyz").split("");

//Previous guess array that will populate the failed guesses of user
var previousGuess = [];

//
var computerGuess ; 


// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guessLeft = 9;
//the solve. you had the
var computerGuess = "";

  //Create a function that will change the letter, reset guesses, and reset previous guesses
function newLetter(){ 
  // Randomly chooses a choice from the options array. This is the Computer's guess.
  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log("computer pick: " + computerGuess);
}

newLetter();

  //Function to reset the score and previous guesses
function guessReset (){
    guessLeft = 9;
    previousGuess = [];
    newLetter(); //does this actually work?
}

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {


// Determines which key was pressed by the user
var userGuess = event.key;
  console.log("your pick: " + userGuess);


//Disables the same key from being clicked twice!!!!!
if(previousGuess.includes(userGuess)) {
return;
}

//Previous guess is uploaded 
previousGuess.push(userGuess);

if (userGuess === "a" || userGuess === "b" || userGuess === "c" || userGuess === "d" || userGuess === "e" ||
  userGuess === "f" || userGuess === "j" || userGuess === "k" || userGuess === "l" || userGuess === "m" ||
    userGuess === "n" || userGuess === "o" || userGuess === "p" || userGuess === "q" || userGuess === "r" ||
    userGuess === "s" || userGuess === "t" || userGuess === "u" || userGuess === "v" || userGuess === "w" ||
    userGuess === "x" || userGuess === "y" || userGuess === "z") {
    console.log("it was a letter");
    console.log("userguess is " + userGuess + "computerGuess " + computerGuess);

    if (userGuess !== computerGuess) {
      //Subtract a guess when you pick a letter that does not match the computers choice
      guessLeft--;
    }
    else if (userGuess == computerGuess) {
      //If the user matches computer then they gain point
      console.log("they match");
      wins++;
      guessReset();
    }

    if (guessLeft === 0) {
      //Add a point to losses if you run out of points before guessing the right letter
      losses++;
      //Guesses will return to 9 when you run out of guesses
      guessReset();
    }


  }

  // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
  var html =
    "<h1>The Psychic Game</h1>" +
    "<p>Guess what letter I’m thinking of<p>" +
    "<p>wins: " + wins + "</p>" +
    "<p>losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessLeft + "</p>" +
    "<p>Your Guesses so far: " + previousGuess.join(", ") + "</p>"


  // Set the inner HTML contents of the #game div to our html string. Updating the page itself
  document.querySelector("#game").innerHTML = html;
}