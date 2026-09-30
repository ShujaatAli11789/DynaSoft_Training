document.querySelector("#body").addEventListener("click", (e) => {
  let clickedBtn = e.target.closest("button");
  console.log("button click: " + clickedBtn.textContent);
});
