const lightBtn = document.querySelector(".light-mode");
const darkBtn = document.querySelector(".dark-mode");
const body = document.querySelector("body");

lightBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.documentElement.classList.remove("dark");
});
darkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.documentElement.classList.add("dark");
});
