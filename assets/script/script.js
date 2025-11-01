const namesEl = document.getElementById("names");
let nameChangeInterval;

function nameChange() {
  const current = namesEl.querySelector(".show");
  const next =
    current.nextElementSibling || current.parentElement.firstElementChild;
  next.classList.add("show");
  current.classList.remove("show");
}

function newNameChangeInterval() {
  nameChangeInterval = setInterval(nameChange, 5000);
}

namesEl.addEventListener("click", () => {
  nameChange();
  clearInterval(nameChangeInterval);
  newNameChangeInterval();
});
