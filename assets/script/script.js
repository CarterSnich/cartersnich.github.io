const namesEl = document.getElementById("names");
let nameChangeInterval = setInterval(nameChange, 3000);

function nameChange() {
  const current = namesEl.querySelector(".show");
  const next =
    current.nextElementSibling || current.parentElement.firstElementChild;
  next.classList.add("show");
  current.classList.remove("show");
}

namesEl.addEventListener("click", () => {
  nameChange();
  clearInterval(nameChangeInterval);
  nameChangeInterval = setInterval(nameChange, 3000);
});
