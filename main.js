console.log("game scripts connected");

var secretNumber = Math.floor( Math.random() * 100 + 1 );
var numberGuessArray = [];
var pressEnter = document.getElementById("numberGuess");
var pressGo = document.getElementById("goButton");

pressEnter.addEventListener('keyup',function(e){
    if (e.keyCode === 13) {
    playGame();
  }
});

goButton.addEventListener('click', function() {
  playGame();
});

function playGame() {
  $("#showGuesses").css("color", "black");
  var numberGuess = document.getElementById('numberGuess').value;
  console.log(secretNumber);
    if (numberGuess.match(/[a-z]/i)) {
      numberGuess = null;
      alert("Numbers only!");
    }
    else if (numberGuess == '') {
      alert("Enter a number!");
    }
    else if (numberGuess > 100 || numberGuess < 1) {
      alert("Your number must be between 1 and 100");
    }
    else if (numberGuessArray.length == 9 && numberGuess == secretNumber) {
      $("#showGuesses").text("Great job, you guessed the number just in time! Correct number: " + secretNumber);
      $("#numberGuess").val("").focus();
      $("#hintField").val("");
      numberGuessArray = [];
      secretNumber = Math.floor( Math.random() * 100 + 1 );
  } else if (numberGuess == secretNumber && numberGuessArray.length === 0){
      $("#showGuesses").css("color", "blue").text("Wow! You guessed the correct number on your first guess! Correct number: " + secretNumber);
      $("#numberGuess").val("").focus();
      $("#hintField").val("");
      numberGuessArray = [];
      secretNumber = Math.floor( Math.random() * 100 + 1 );
  } else if (numberGuess == secretNumber){
      $("#showGuesses").css("color", "green").text("Great job, you guessed the correct number in " + (numberGuessArray.length + 1) + " attempts! Correct number: " + secretNumber);
      $("#numberGuess").val("").focus();
      $("#hintField").val("");
      numberGuessArray = [];
      secretNumber = Math.floor( Math.random() * 100 + 1 );
  } else if (numberGuessArray.length === 9 && numberGuess != secretNumber) {
      $("#showGuesses").text("Sorry, you weren't able to correct the correct number in time! Correct number: " + secretNumber);
      $("#numberGuess").val("").focus();
      $("#hintField").val("");
      numberGuessArray = [];
      secretNumber = Math.floor( Math.random() * 100 + 1 );
  } else {
    if (numberGuess > secretNumber) {
      $("#hintField").text("Too high!");
    } else if (numberGuess < secretNumber) {
      $("#hintField").text("Too low!");
    }
      numberGuessArray.push(numberGuess);
      $("#showGuesses").text("Your guesses: " + numberGuessArray);
      $("#numberGuess").val("").focus();
      console.log(numberGuessArray);

  }
}

// $('#goButton').click( function playGame() {
//   $("#showGuesses").css("color", "black");
//   var numberGuess = document.getElementById('numberGuess').value;
//   console.log(secretNumber);
//     if (numberGuess.match(/[a-z]/i)) {
//       numberGuess = null;
//       alert("Numbers only!");
//     }
//     else if (numberGuess == '') {
//       alert("Enter a number!");
//     }
//     else if (numberGuess > 100 || numberGuess < 1) {
//       alert("Your number must be between 1 and 100");
//     }
//     else if (numberGuessArray.length == 9 && numberGuess == secretNumber) {
//       $("#showGuesses").text("Great job, you guessed the number just in time! Correct number: " + secretNumber);
//       $("#numberGuess").val("").focus();
//       $("#hintField").val("");
//       numberGuessArray = [];
//       secretNumber = Math.floor( Math.random() * 100 + 1 );
//   } else if (numberGuess == secretNumber && numberGuessArray.length === 0){
//       $("#showGuesses").css("color", "blue").text("Wow! You guessed the correct number on your first guess! Correct number: " + secretNumber);
//       $("#numberGuess").val("").focus();
//       $("#hintField").val("");
//       numberGuessArray = [];
//       secretNumber = Math.floor( Math.random() * 100 + 1 );
//   } else if (numberGuess == secretNumber){
//       $("#showGuesses").css("color", "green").text("Great job, you guessed the correct number in " + (numberGuessArray.length + 1) + " attempts! Correct number: " + secretNumber);
//       $("#numberGuess").val("").focus();
//       $("#hintField").val("");
//       numberGuessArray = [];
//       secretNumber = Math.floor( Math.random() * 100 + 1 );
//   } else if (numberGuessArray.length === 9 && numberGuess != secretNumber) {
//       $("#showGuesses").text("Sorry, you weren't able to correct the correct number in time! Correct number: " + secretNumber);
//       $("#numberGuess").val("").focus();
//       $("#hintField").val("");
//       numberGuessArray = [];
//       secretNumber = Math.floor( Math.random() * 100 + 1 );
//   } else {
//     if (numberGuess > secretNumber) {
//       $("#hintField").text("Too high!");
//     } else if (numberGuess < secretNumber) {
//       $("#hintField").text("Too low!");
//     }
//       numberGuessArray.push(numberGuess);
//       $("#showGuesses").text("Your guesses: " + numberGuessArray);
//       $("#numberGuess").val("").focus();
//       console.log(numberGuessArray);
//
//   }
// });
