document.addEventListener('DOMContentLoaded', () => {
  const minValueElement = document.getElementById('minValue');
  const maxValueElement = document.getElementById('maxValue');
  const guessInput = document.getElementById('guessInput');
  const guessButton = document.getElementById('guessButton');
  const feedback = document.getElementById('feedback');
  const attemptsElement = document.getElementById('attempts');
  const resetButton = document.getElementById('resetButton');

  let minValue = 1;
  let maxValue = 100;
  let targetNumber;
  let attempts;

  function startGame() {
    targetNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    attempts = 0;
    feedback.textContent = '';
    attemptsElement.textContent = 'Attempts: 0';
    guessInput.value = '';
    guessInput.disabled = false;
    guessButton.disabled = false;
    resetButton.style.display = 'none';
  }

  function handleGuess() {
    const guess = parseInt(guessInput.value, 10);
    attempts++;
    attemptsElement.textContent = `Attempts: ${attempts}`;

    if (isNaN(guess) || guess < minValue || guess > maxValue) {
      feedback.textContent = `Please enter a number between ${minValue} and ${maxValue}.`;
      return;
    }

    if (guess < targetNumber) {
      feedback.textContent = 'Too low! Try again.';
    } else if (guess > targetNumber) {
      feedback.textContent = 'Too high! Try again.';
    } else {
      feedback.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
      guessInput.disabled = true;
      guessButton.disabled = true;
      resetButton.style.display = 'inline-block';
    }
  }

  function handleReset() {
    startGame();
  }

  guessButton.addEventListener('click', handleGuess);
  resetButton.addEventListener('click', handleReset);

  startGame();
});
