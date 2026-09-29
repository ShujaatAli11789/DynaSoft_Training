// Data

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2026-01-18T21:31:17.178Z",
    "2026-01-23T07:42:02.383Z",
    "2026-01-28T09:15:04.904Z",
    "2026-04-01T10:17:24.185Z",
    "2026-05-08T14:11:59.604Z",
    "2026-09-25T17:01:17.194Z",
    "2026-09-27T23:36:17.929Z",
    "2026-09-29T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2026-07-01T13:15:33.035Z",
    "2026-07-30T09:48:16.867Z",
    "2026-08-25T06:04:23.907Z",
    "2026-08-25T14:18:46.235Z",
    "2026-08-05T16:33:06.386Z",
    "2026-09-10T14:43:26.374Z",
    "2026-09-25T18:49:59.371Z",
    "2026-09-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

function makeInits(accounts) {
  accounts.forEach((account) => {
    account.username = account.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
}
makeInits(accounts);
console.log(accounts);

// getting the UI elements

const welcomeMessageCont = document.querySelector("#welcome");
const userInputELem = document.querySelector("#user");
const pinInputELem = document.querySelector("#PIN");
const signInBtn = document.querySelector("#signin_btn");
const mainContainer = document.querySelector("#content_container");
const transContainerElem = document.querySelector("#transactions");
const inTransElem = document.querySelector("#inTrans");
const outTransElem = document.querySelector("#outTrans");
const currentUserBalanceELem = document.querySelector("#userBalance");
const intrestElem = document.querySelector("#intrest");
const transToUser = document.querySelector("#transToInput");
const transToAmount = document.querySelector("#transToAmount");
const transToBtn = document.querySelector("#transToBtn");
const closeUserInputElem = document.querySelector("#closeUserInput");
const closePinInputELem = document.querySelector("#closePinInput");
const closeUserBtn = document.querySelector("#closeUserBtn");
const reqLoanElem = document.querySelector("#reqLoan");
const reqLoanBtn = document.querySelector("#reqLoanBtn");
const btnSort = document.querySelector(".btn-sort");
const Datelabel = document.querySelector("#asOfDateLabel");
const timerLabel = document.querySelector("#timer");

// signIn and fetching user
let user;
let PIN;
let countDownTimer;
let currentUser; //= accounts[0];
// mainContainer.classList.remove("hidden");
// displayMovements(currentUser);

// auth
function auth(e) {
  e.preventDefault();

  PIN = Number(pinInputELem.value.trim());
  user = userInputELem.value.trim().toLowerCase();
  if (user && PIN) {
    pinInputELem.value = "";
    userInputELem.value = "";
    userInputELem.blur();
    pinInputELem.blur();
    currentUser = accounts.find((acc) => acc.username === user);
    if (currentUser?.pin === PIN) {
      const now = new Date();
      const options = {
        hour: "numeric",
        minute: "numeric",
        day: "numeric",
        month: "numeric",
        year: "numeric",
      };

      Datelabel.textContent = new Intl.DateTimeFormat(
        currentUser.locale,
        options,
      ).format(now);

      mainContainer.classList.remove("hidden");
      welcomeMessageCont.textContent = `Welcome! ${currentUser.owner.split(" ")[0]}`;
      displayMovements(currentUser);
      if (countDownTimer) {
        clearInterval(countDownTimer);
        startLogoutTimer();
      } else {
        startLogoutTimer();
      }
    } else {
      mainContainer.classList.add("hidden");
      welcomeMessageCont.textContent = "Sorry! User doesn't exist or wrong PIN";
    }
  }
}

// sign in eventListeners
signInBtn.addEventListener("click", (e) => auth(e));
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    auth(e);
  }
});

function formatDate(date, locale) {
  const calcDate = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDate(new Date(), date);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";

  if (daysPassed <= 7) {
    return `${daysPassed} days ago`;
  } else {
    return new Intl.DateTimeFormat(locale).format(date);
  }
}

// format movement

function formatMovement(account, movement) {
  return new Intl.NumberFormat(account.locale, {
    style: "currency",
    currency: account.currency,
  }).format(movement);
}

// start logout timer

function startLogoutTimer() {
  let timer = 600;
  countDownTimer = setInterval(function () {
    let min = String(Math.trunc(timer / 60)).padStart(2, 0);
    let sec = String(Math.trunc(timer % 60)).padStart(2, 0);

    timerLabel.textContent = `${min}:${sec}`;
    console.log(`${min}:${sec}`);
    timer--;

    if (timer === -1) {
      currentUser = "";
      mainContainer.classList.add("hidden");
      clearInterval(countDownTimer);
    }
  }, 1000);
}

// display transactions

function displayMovements(account, sort = false) {
  let detailedMovements = account.movements.map((mov, i) => ({
    movement: mov,
    date: account.movementsDates.at(i),
  }));
  console.log(detailedMovements);

  if (sort) detailedMovements.sort((a, b) => a.movement - b.movement);

  transContainerElem.innerHTML = "";
  outTransElem.textContent = "";
  inTransElem.textContent = "";
  currentUserBalanceELem.textContent = "";

  detailedMovements.forEach((obj, index) => {
    const type = obj.movement > 0 ? "deposit" : "withdrawal";

    const date = new Date(obj.date);
    const displayDate = formatDate(date, account.locale);
    let formattedMovement = formatMovement(account, obj.movement);
    let newMovement = document.createElement("div");
    newMovement.classList.add("movements__row");
    newMovement.innerHTML = `
      <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
      <div class="movements__date">${displayDate} </div>
      <div class="movements__value">${formattedMovement}</div>
    `;

    transContainerElem.insertAdjacentElement("afterbegin", newMovement);
  });
  let movements = detailedMovements.map((obj) => obj.movement);
  console.log(movements);
  let inTransTotal = Math.abs(
    movements
      .filter((movement) => movement > 0)
      .reduce((acc, movement) => acc + movement, 0),
  );
  inTransElem.textContent = `${formatMovement(account, inTransTotal)}`;

  let outTransTotal = Math.abs(
    movements
      .filter((movement) => movement < 0)
      .reduce((acc, movement) => acc + movement, 0),
  );
  outTransElem.textContent = `${formatMovement(account, outTransTotal)} `;

  let currentUserBalance = movements.reduce(
    (acc, movement) => acc + movement,
    0,
  );
  currentUserBalanceELem.textContent = `${formatMovement(account, currentUserBalance)}`;
  currentUser.balance = movements.reduce((acc, movement) => acc + movement, 0);

  let totalIntrest = Math.abs(
    movements
      .filter((movement) => movement > 0)
      .map((deposite) => (deposite * account.interestRate) / 100)
      .filter((deposite) => deposite >= 1)
      .reduce((acc, movement) => acc + movement, 0),
  );
  intrestElem.textContent = `${formatMovement(account, totalIntrest)}`;
}

// transfer amount
transToBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const recieverUsername = transToUser.value.toLowerCase().trim();
  const ToAmount = Math.floor(Number(transToAmount.value));
  const recieverAccount = accounts.find(
    (acc) => acc.username === recieverUsername,
  );

  transToAmount.value = transToUser.value = "";

  transToAmount.blur();

  const showTransferError = function (message) {
    const header = document.querySelector(".transmoney>h2");
    header.textContent = message;
    setTimeout(() => (header.textContent = "Transfer money"), 2000);
  };

  if (!recieverAccount) {
    showTransferError("User does not exist, Failed");
    return;
  }

  if (recieverAccount.username === currentUser.username) {
    showTransferError("Cannot transfer to self, Failed");
    return;
  }

  if (ToAmount <= 0 || ToAmount > currentUser.balance) {
    showTransferError("Invalid Amount or Low Balance");
    return;
  }
  currentUser.movements.push(-ToAmount);
  recieverAccount.movements.push(ToAmount);

  const now = new Date().toISOString();
  currentUser.movementsDates.push(now);
  recieverAccount.movementsDates.push(now);

  displayMovements(currentUser);
  if (countDownTimer) {
    clearInterval(countDownTimer);
    startLogoutTimer();
  }
});

// delete user
closeUserBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let toDeleteUser = closeUserInputElem.value.toLowerCase().trim();
  let toDeletePin = Number(closePinInputELem.value.trim());

  if (
    toDeleteUser === currentUser.username &&
    toDeletePin === currentUser.pin
  ) {
    let index = accounts.findIndex(
      (account) => account.username === currentUser.username,
    );
    mainContainer.classList.add("hidden");
    accounts.splice(index, 1);
    closeUserInputElem.value = closePinInputELem.value = "";
    if (countDownTimer) {
      clearInterval(countDownTimer);
    }
  }
});
// req loan

reqLoanBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const now = new Date().toISOString();
  let amount = Math.floor(Number(reqLoanElem.value));

  if (
    amount > 0 &&
    currentUser.movements.some((movement) => movement >= amount * 0.1)
  ) {
    setTimeout(() => {
      currentUser.movements.push(amount);
      currentUser.movementsDates.push(now);

      displayMovements(currentUser);
      if (countDownTimer) {
        clearInterval(countDownTimer);
        startLogoutTimer();
      }
    }, 2500);
  } else {
    const header = document.querySelector(".requestAmount>h2");
    header.textContent = "Can not apply for loan";
    setTimeout(() => (header.textContent = "Request loan"), 2000);
  }
  reqLoanElem.value = "";
});

// sort transactions on display
let movementSorted = false;

btnSort.addEventListener("click", (e) => {
  e.preventDefault();
  displayMovements(currentUser, !movementSorted);
  movementSorted = !movementSorted;
});
