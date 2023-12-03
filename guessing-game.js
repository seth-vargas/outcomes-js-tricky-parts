function guessingGame() {
  const answer = Math.floor(Math.random() * 100);

  let hasWon = false;
  let numGuesses = 0;

  return function (guess) {
    if (hasWon) return "The game is over, you already won!";

    numGuesses++;

    if (guess === answer) {
      hasWon = true;

      return `You win! You found ${guess} in ${numGuesses} ${
        numGuesses === 1 ? "guess" : "guesses"
      }.`;
    }

    if (guess < answer) return `${guess} is too low!`;
    if (guess > answer) return `${guess} is too high!`;
  };
}

module.exports = { guessingGame };
