const enterNumText = "Please enter a number greater than zero";
let restartGame = true;
let rangeNum;
let randomNum;
let attempts; 
let guess;
let playAgain;

alert(`Welcome to "GUESS THAT NUMBER" Please click "OK" to start the game.`);

// Game restarts as long as a restartGame has a value of true
while (restartGame){
    // Asks user to enter a number to set the upper bound for the random Number that will be created
rangeNum = prompt(parseInt(`Please enter a maximum number for the range:`));
// rangeNum = parseInt(RangeNum);

// parseInt tries to convert a value into a number value. If the conversion is not possible, then it will return NaN as the value/result. (NOTE: NaN has a default boolean value of false. All numbers have a default boolean value of true. Negative numbers included)

alert(rangeNum);

// Verifies the user's entry for a range number is a number greater than zero
while (!rangeNum || rangeNum < 1 ){
    rangeNum = parseInt(prompt(enterNumText));

}
// Creates the random number using the range number entered by the user
randomNum = Math.floor(Math.random() * rangeNum) + 1;

// Promts user to enter a number of attempts allowed (A.K.A. Number of guesses)
atempts = parseInt(prompt(`Please enter a number of attempts allowed:`));

// Verifies the user's entry for a number of attempts allowed is a number greater than zero
while (!attempts || attempts < 1 ){
    attempts = parseInt(prompt(enterNumText));
}

// Asks user to enter a guess in the range that they set
guess = parseInt(prompt(`Please enter a guess between 1 and ${rangeNum}. You have ${attempts} attempts:`));

// Continues looping until user guesses correct number or run out of attempts
while (true) {
// Displays the number/answer when a code word is entered
if (guess === "Mellon"){
    alert(`The number is ${randomNum}`);
    prompt(` Please enter a guess between 1 and ${rangeNum}. You have ${attempts} attempts:`);
}

guess = parseInt(guess);

// Verifies the user's guess is a number, more than zero, and within the range they set
while (!guess || guess < 1 || guess > rangeNum ){
    guess = parseInt(prompt(`${enterNumText} and with the range of 1 to ${rangeNum}`));
}

// Removes one attempt
attempts--;

// Checks if the user guessed correctly
if (guess === randomNum){
    alert(`CONGRATULATIONS YOU GUESSED THE CORRECT NUMBER: ${randomNum}`) 
     break; }
    //  Checks if user has any attempts left. If not, then the game ends
    else if (attempts === 0) {
        alert(`Sorry, but you have run out of attemts :( The number was ${randomNum}`);
        break;
        // Checks if user's guess was too low and prompts user to again if guess was too low
    } else if (guess < randomNum){
        guess = parseInt(prompt(`Too low. You have ${attempts} attempts left`));
        // Propmpts user the guess was too high and to guess again
    } else {  
          guess = parseInt(prompt(`Too high. You have ${attempts} attempts left`)); 
    }
     
}
// Prompts user with option to play again
playAgain = prompt(`Would you like to play again? Y for yes. N for no`);

// Loop continues until user submits a valid response
while (true) {
// Check if the user answer no (A.K.A. "N" or "n")
if (playAgain.toUpperCase() === "N"){
    // Alerts user the game is over and game does not restart
    alert(`Thanks for playing!`); 
    restartGame = false;
    break;
    // Checks if the user answer is yes (A.K.A. "Y" or "y")
}else if (playAgain.toUpperCase() === "Y"){
    break;
    // Prompts the user to enter a valid response
} else {
    playAgain = prompt(`Please enter Y or N:`)
}
}

}

