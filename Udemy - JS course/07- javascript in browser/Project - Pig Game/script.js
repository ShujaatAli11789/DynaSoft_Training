"use strict";

const reset = document.querySelector("#newGame");
const diceImg = document.querySelector("#dice>img");
const rollDiceBtn = document.querySelector("#rollDiceBtn");
const hold = document.querySelector("#hold");

let p1Container = document.querySelector("#player1");
let p2Container = document.querySelector("#player2");

let p1CurrentTotalUI = document.querySelector("#player1Score");
let p2CurrentTotalUI = document.querySelector("#player2Score");

let p1RollUI = document.querySelector("#player1Roll");
let p2RollUI = document.querySelector("#player2Roll");

let newGame = document.querySelector("#newGame");

let player1Score = 0;
let player2Score = 0;

let p1CurrentTotal = 0;
let p2CurrentTotal = 0;

let currentPlayer = "player1";

let roll = 0;
// the dice roll logic

function reset() {
  player1Score = 0;
  player2Score = 0;

  p1CurrentTotal = 0;
  p2CurrentTotal = 0;

  roll = 0;

  currentPlayer = "player1";

  if (currentPlayer === "player1") {
    p1Container.classList.add("active");
    p2Container.classList.remove("active", "win");
    p1Container.classList.remove("win");
  }
  reset();

  p1CurrentTotalUI.textContent = 0;
  p2CurrentTotalUI.textContent = 0;

  p1RollUI.textContent = 0;
  p2RollUI.textContent = 0;

  hold.disabled = false;
  rollDiceBtn.disabled = false;
  console.log("New game");
}

rollDiceBtn.addEventListener("click", function () {
  roll = Math.floor(Math.random() * 6) + 1;
  console.log("dice rolled is " + roll);
  diceImg.setAttribute("src", `assets/dice-${roll}.png`);
  updateScore(roll);
});

// hold button logic

function changePlayer() {
  if (currentPlayer === "player1") {
    currentPlayer = "player2";
    p2Container.classList.add("active");
    p1Container.classList.remove("active");
    console.log("current active player is: " + currentPlayer);
  } else {
    currentPlayer = "player1";
    p1Container.classList.add("active");
    p2Container.classList.remove("active");
    console.log("current active player is: " + currentPlayer);
  }
}

hold.addEventListener("click", () => {
  if (currentPlayer === "player1") {
    p1CurrentTotal += player1Score;
    p1CurrentTotalUI.textContent = p1CurrentTotal;
  } else {
    p2CurrentTotal += player2Score;
    p2CurrentTotalUI.textContent = p2CurrentTotal;
  }

  changePlayer();
});

// score update

function updateScore(roll) {
  if (roll === 1) {
    if (currentPlayer === "player1") {
      p1RollUI.textContent = roll;

      p1CurrentTotalUI.textContent = 0;
      player1Score = 0;
    } else {
      p2RollUI.textContent = roll;
      p2CurrentTotalUI.textContent = 0;
      player2Score = 0;
    }
    changePlayer();
  } else {
    if (currentPlayer === "player1") {
      p1RollUI.textContent = roll;
      player1Score += roll;

      if (player1Score + p1CurrentTotal >= 20) {
        hold.disabled = true;
        rollDiceBtn.disabled = true;
        p1CurrentTotalUI.textContent = "Wins!!!";
        p1Container.classList.add("win");
      }

      console.log(
        "current player is " + currentPlayer + "with score" + player1Score,
      );
    } else {
      p2RollUI.textContent = roll;
      player2Score += roll;

      if (player2Score + p2CurrentTotal >= 20) {
        hold.disabled = true;
        rollDiceBtn.disabled = true;
        p2CurrentTotalUI.textContent = "Wins!!!";
        p2Container.classList.add("win");
      }
      console.log(
        "current player is " + currentPlayer + "with score" + player2Score,
      );
    }
  }
}

// reset game

newGame.addEventListener("click", reset);
