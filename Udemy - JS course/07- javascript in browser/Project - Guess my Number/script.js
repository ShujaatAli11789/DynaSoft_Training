const reset = document.querySelector("#reset");
const actualNumberDisplay = document.querySelector("#actualNumberDisplay");
const userInput = document.querySelector("#input");
const checkBtn = document.querySelector("#check");
const guessResult = document.querySelector("#guessCheckRes");
const score = document.querySelector("#score");
const highscore = document.querySelector("#highscore");
const body = document.querySelector("body");

let usrScore = 20;
let currhighscore = 0;
let prevHighScore = 0;
score.innerText = `${usrScore}`;

let cpGuess = Math.floor(Math.random() * 20) + 1;
let userInputVal = "";

reset.addEventListener("click", () => {
  guessResult.innerText = "Start Guessing";
  score.innerText = "20";
  usrScore = 20;
  actualNumberDisplay.innerText = "?";
  cpGuess = Math.floor(Math.random() * 20) + 1;
  body.style.backgroundColor = "black";
  userInput.style.backgroundColor = "black";
});

checkBtn.addEventListener("click", () => {
  userInputVal = Number(userInput.value);

  if (userInputVal != cpGuess) {
    guessResult.innerText = userInputVal > cpGuess ? "Too High" : "Too Low";
    usrScore -= 1;
    score.innerText = `${usrScore}`;
  } else {
    currhighscore = usrScore;
    if (currhighscore > prevHighScore) {
      prevHighScore = currhighscore;
      highscore.innerText = currhighscore;
    }
    body.style.backgroundColor = "#60b347";
    actualNumberDisplay.innerText = cpGuess;
    userInput.style.backgroundColor = "#60b347";
  }
});
