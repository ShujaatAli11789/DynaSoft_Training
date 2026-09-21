const showBtns = document.querySelectorAll(".ShowBtn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close");

let isHidden = true;

showBtns.forEach((showBtn) => {
  showBtn.addEventListener("click", () => {
    overlay.classList.remove("hidden");
    modal.classList.remove("hidden");
    isHidden = false;
  });
});

close.addEventListener("click", hide());
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && isHidden == false) hide();
});

function hide() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  isHidden = true;
}
