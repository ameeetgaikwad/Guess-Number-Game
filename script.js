const userInput = document.querySelector(".inputNumber");
const check = document.querySelector(".submit");
const result = document.querySelector(".loseOrWin");
const lowHigh = document.querySelector(".lowHigh");
const remainingGuess = document.querySelector(".remainingGuess");
const newGame = document.querySelector(".newGame");
let randomNumber = Math.floor(Math.random() * 20 + 1);
let gameOn = true;
let turn = 5;

check.addEventListener("click", checkButton);

function checkButton(e) {
  e.preventDefault();
  if (turn == 0) {
    gameOn = false;
    lowHigh.innerHTML = `GAME OVER! CORRECT GUESS WAS ${randomNumber}`;
    document.querySelector("body").style.backgroundColor = "#CD104D";
  }
  if (gameOn) {
    validateGuess(userInput.value);
  }
}

function validateGuess(guess) {
  if (guess == 0) {
    alert("Number should be greater than 0");
  } else if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess > 20) {
    alert("Number should be less than 20");
  } else {
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (randomNumber == userInput.value) {
    lowHigh.innerHTML = "Congratulations🎉! You Won";
    document.querySelector("body").style.backgroundColor = "#937DC2";
  } else if (randomNumber < userInput.value) {
    lowHigh.innerHTML = "Too High!";
    turn--;
    remainingGuess.innerHTML = turn;
  } else if (randomNumber > userInput.value) {
    lowHigh.innerHTML = "Too Low!";
    turn--;
    remainingGuess.innerHTML = turn;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkButton(e);
  }
});

newGame.addEventListener("click", function (e) {
  e.preventDefault();
  gameOn = true;
  turn = 5;
  lowHigh.innerHTML = "";
  remainingGuess.innerHTML = 5;
  userInput.value = "";
  randomNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector("body").style.backgroundColor = "#7895b2";
});
