const html = document.documentElement;
const lightToggle = document.getElementById("light-toggle");
const darkToggle = document.getElementById("dark-toggle");

function setTheme(theme) {
  html.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

lightToggle.addEventListener("click", function (e) {
  e.preventDefault();
  setTheme("light");
  this.blur();
});

darkToggle.addEventListener("click", function (e) {
  e.preventDefault();
  setTheme("dark");
  this.blur();
});

const storedTheme = localStorage.getItem("theme");

if (storedTheme === null || storedTheme === "dark") {
  html.setAttribute("data-theme", "dark");
} else {
  html.setAttribute("data-theme", "light");
}
