// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: "premium",
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: "standard",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: "premium",
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: "basic",
};

const accounts = [account1, account2, account3, account4];

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

// signIn and fetching user
let user;
let PIN;
let currentUser;
// mainContainer.classList.remove("hidden");
// displayMovements(currentUser);

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
      mainContainer.classList.remove("hidden");
      welcomeMessageCont.textContent = `Welcome! ${currentUser.owner.split(" ")[0]}`;
      displayMovements(currentUser);
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

// display transactions

function displayMovements(account, sort = false) {
  let movements = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;

  transContainerElem.innerHTML = "";
  outTransElem.textContent = "";
  inTransElem.textContent = "";
  currentUserBalanceELem.textContent = "";
  movements.forEach((movement, index) => {
    const type = movement > 0 ? "deposit" : "withdrawal";

    let newMovement = document.createElement("div");
    newMovement.classList.add("movements__row");
    newMovement.innerHTML = `
      <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
      <div class="movements__date">08/03/2020</div>
      <div class="movements__value">${movement} €</div>
    `;

    transContainerElem.insertAdjacentElement("afterbegin", newMovement);
  });
  inTransElem.textContent = `${Math.abs(
    movements
      .filter((movement) => movement > 0)
      .reduce((acc, movement) => acc + movement, 0),
  )} €`;
  outTransElem.textContent = `${Math.abs(
    movements
      .filter((movement) => movement < 0)
      .reduce((acc, movement) => acc + movement, 0),
  )} €`;
  currentUserBalanceELem.textContent = `${movements.reduce(
    (acc, movement) => acc + movement,
    0,
  )} €`;
  currentUser.balance = movements.reduce((acc, movement) => acc + movement, 0);
  intrestElem.textContent = `${Math.abs(
    movements
      .filter((movement) => movement > 0)
      .map((deposite) => (deposite * account.interestRate) / 100)
      .filter((deposite) => deposite >= 1)
      .reduce((acc, movement) => acc + movement, 0),
  )} €`;
}

// transfer amount
transToBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const recieverUsername = transToUser.value.toLowerCase().trim();
  const ToAmount = Number(transToAmount.value.trim());
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

  displayMovements(currentUser);
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
    closeUserInputElem = closePinInputELem = "";
  }
});

reqLoanBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let amount = Number(reqLoanElem.value);

  if (
    amount > 0 &&
    currentUser.movements.some((movement) => movement >= amount * 0.1)
  ) {
    currentUser.movements.push(amount);
    displayMovements(currentUser);
  } else {
    const header = document.querySelector(".transmoney>h2");
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
