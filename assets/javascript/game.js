    // Where the computer picks what it will use as random guess. The split is a method to break up the string and pick one letter at a time. 
    var computerChoices = ("abcdefghijklmnopqrstuvwxyz").split("");

    //Previous guess array that will populate the failed guesses of user
    var previousGuess = [];


    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var guessLeft = 9;


    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;
      previousGuess.push(userGuess);

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


      if (userGuess === "a"|| 
        userGuess === "b"|| 
        userGuess === "c"|| 
        userGuess === "d"|| 
        userGuess === "e"|| 
        userGuess === "f"|| 
        userGuess === "j"|| 
        userGuess === "k"|| 
        userGuess === "l"|| 
        userGuess === "m"|| 
        userGuess === "n"|| 
        userGuess === "o"|| 
        userGuess === "p"|| 
        userGuess === "q"|| 
        userGuess === "r"|| 
        userGuess === "s"|| 
        userGuess === "t"|| 
        userGuess === "u"|| 
        userGuess === "v"|| 
        userGuess === "w"|| 
        userGuess === "x"|| 
        userGuess === "y"|| 
        userGuess === "z" ) {
          if (userGuess === computerGuess){
          wins++;
        } 
        if (userGuess !== computerGuess){
          guessLeft--;
        }

        if (guessLeft = 0){
        losses++;
        }
      }


      


        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<h1>The Psychic Game</h1>" +
          "<p>Guess what letter I’m thinking of<p>" +
          "<p>You chose: " + userGuess + "</p>" +
          "<p>The computer chose: " + computerGuess + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>Guesses Left: " + guessLeft + "</p>"
          // "<p>Your Guesses so far: " + previousGuess.join(", ") "</p>";


        // Set the inner HTML contents of the #game div to our html string. Updating the page itself
        document.querySelector("#game").innerHTML = html;
      }
    


