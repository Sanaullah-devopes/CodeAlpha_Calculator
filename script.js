let mode = document.querySelector("#mode");
let curmode = "light";
function check() {
  if (curmode == "light") {
    curmode = "dark";
    document.querySelector(".calculator").style.backgroundColor = "black";
  } else {
    curmode = "light";
    document.querySelector(".calculator").style.backgroundColor = "white";
  }
  console.log(curmode);
}
mode.addEventListener("click", check);

let operator = document.querySelector("#mode");
function col() {
  const operators = document.querySelectorAll(".operator");

  operators.forEach((button) => {
    if (curmode === "dark") {
      button.style.backgroundColor = "white";
      button.style.color = "#afafaf";
    } else {
      button.style.backgroundColor = "#afafaf";
      button.style.color = "white";
    }
  });
}
operator.addEventListener("click", col);
function change() {
  if (curmode == "dark") {
    document.querySelector(".input").style.color = "white";
  } else {
    document.querySelector(".input").style.color = "black";
  }
}
mode.addEventListener("click", change);
function clearDisplay() {
  display.value = "";
}
