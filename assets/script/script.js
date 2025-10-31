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

const lightToggle = document.getElementById("light-toggle");
const darkToggle = document.getElementById("dark-toggle");

lightToggle.addEventListener("click", function (e) {
  e.preventDefault();
  lightToggle.classList.add("active");
  darkToggle.classList.remove("active");
  document.body.classList.remove("dark");
  localStorage.setItem("theme", "light");
  this.blur();
});

darkToggle.addEventListener("click", function (e) {
  e.preventDefault();
  lightToggle.classList.remove("active");
  darkToggle.classList.add("active");
  document.body.classList.add("dark");
  localStorage.setItem("theme", "dark");
  this.blur();
});

const setTheme = localStorage.getItem("theme");

if (setTheme === null || setTheme === "dark") {
  lightToggle.classList.remove("active");
  darkToggle.classList.add("active");
  document.body.classList.add("dark");
} else {
  lightToggle.classList.add("active");
  darkToggle.classList.remove("active");
  document.body.classList.remove("dark");
}
