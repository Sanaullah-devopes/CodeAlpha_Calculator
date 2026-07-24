let mode = document.querySelector("#mode");

let curmode = "light";

mode.addEventListener("click", () => {
  if (curmode == "light") {
    curmode = "dark";
    document.querySelector(".calculator").style.backgroundColor = "black";
  } else {
    curmode = "light";
    document.querySelector(".calculator").style.backgroundColor = "white";
  }
  console.log(curmode);
});

mode.addEventListener("click", () => {
  const operators = document.querySelectorAll(".operator");
  operators.forEach((button) => {
    if (curmode === "dark") {
      button.style.backgroundColor = "white";
      button.style.color = "#afafaf";
      document.querySelector(".input").style.color = "white";
    } else {
      button.style.backgroundColor = "#afafaf";
      button.style.color = "white";
      document.querySelector(".input").style.color = "black";
    }
  });
});

const display = document.querySelector(".input");
const buttons = document.querySelectorAll(".buttons");

let expression = "";
let calculate = (value) => {};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("value");

    expression += value;
    display.value = expression;
  });
});
