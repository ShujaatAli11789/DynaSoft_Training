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

// signIn and fetching user
let user;
let PIN;
let currentUser;
signInBtn.addEventListener("click", function (e) {
  e.preventDefault();

  PIN = Number(pinInputELem.value.trim());
  user = userInputELem.value.trim().toLowerCase();
  if (user && PIN) {
    pinInputELem.value = "";
    userInputELem.value = "";

    currentUser = accounts.find((acc) => acc.username === user);
    if (currentUser?.pin === PIN) {
      mainContainer.classList.remove("hidden");
      welcomeMessageCont.textContent = `Welcome! ${currentUser.owner.split(" ")[0]}`;
    } else {
      mainContainer.classList.add("hidden");
      welcomeMessageCont.textContent = "Sorry! User doesn't exist or wrong PIN";
    }
  }
});

document.addEventListener("keydown", (e) => {
  PIN = Number(pinInputELem.value.trim());
  user = userInputELem.value.trim().toLowerCase();
  if (user && PIN && e.key === "Enter") {
    pinInputELem.value = "";
    userInputELem.value = "";

    currentUser = accounts.find((acc) => acc.username === user);
    if (currentUser?.pin === PIN) {
      mainContainer.classList.remove("hidden");
      welcomeMessageCont.textContent = `Welcome! ${currentUser.owner.split(" ")[0]}`;
      currentUser.movements.forEach((movement, index) => {
        let newMovement = document.createElement("div");
        newMovement.innerHTML = `  <div>
              ${index} ${movement > 0 ? " deposite" : " withdrawal"}
            </div>
            <div>08/03/2020</div>
            <div>${Math.abs(movement)} €</div>`;

           
        transContainerElem.appendChild(newMovement);
      });
    } else {
      mainContainer.classList.add("hidden");
      welcomeMessageCont.textContent = "Sorry! User doesn't exist or wrong PIN";
    }
  }
});
