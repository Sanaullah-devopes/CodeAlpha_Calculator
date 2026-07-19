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
let prevalue;
let currvalue;
