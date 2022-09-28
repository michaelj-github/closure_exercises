const guessingGame = () => {
  const theAnswer = Math.floor(Math.random() * 10);
  let gameOver = false;
  let guesses = 0;

  return function guess(num) {
    if (gameOver) return "The game is over, you already won!";
    guesses++;
    if (num === theAnswer) {
      gameOver = true;
      const guess = guesses === 1 ? "guess" : "guesses";
      return `That's it! The number is ${num}. That took you ${guesses} ${guess}.`;
    }
    if (!num && num !== 0) return "Please enter a valid number as your guess.";
    if (num < theAnswer) return `Sorry, ${num} is too low!`;
    if (num > theAnswer) return `Sorry, ${num} is too high!`;
  };
};

module.exports = guessingGame;
