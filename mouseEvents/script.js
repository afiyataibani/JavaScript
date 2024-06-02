let button1 = document.querySelector("#mode");
let currentTheme = "light";
let body = document.querySelector("body");

button1.addEventListener("click", () => {
  if (currentTheme === "light") {
    currentTheme = "dark";
    body.style.backgroundColor = "black";
  } else {
    currentTheme = "light";
    body.style.backgroundColor = "white";
  }
  console.log(currentTheme);
});

let btn = document.querySelector("#Button");

btn.addEventListener("dblclick", () => {
  let a = document.querySelector("#output");
  a.innerHTML = "Hello";
  console.log(a);
});
