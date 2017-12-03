// an array of all options

var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



// more variables

var wins = 0;
var losses = 0;
var guessLeft = 9;
var guessesSoFar = [];



// the event that sets off the function

document.onkeyup = function(event) {

var userGuess = event.key;
guessesSoFar.push(userGuess);

var compGuess = letterChoices[Math.floor(Math.random() * 26)];

if (userGuess === compGuess) {
	wins++;
} else {
	guessLeft--;
}

if (guessLeft === 0) {
	guessLeft = 9;
	guessesSoFar = [];
	losses++;
} 

 var html =
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses Left: " + guessLeft + "</p>" +
          "<p>Your Guesses so far: " + guessesSoFar + "</p>";

 document.querySelector("#game").innerHTML = html;
};