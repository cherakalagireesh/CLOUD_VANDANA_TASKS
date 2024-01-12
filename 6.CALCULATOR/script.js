const calculator_bottom = document.querySelector(".calculator-bottom");
const display = document.querySelector(".display");
const power = document.querySelector(".power");

let value = "";
let flag = false;
calculator_bottom.addEventListener("click", function (e) {
  if (e.target.closest("button")) {
    value += e.target.closest("button").value;

    if (flag) {
      if (
        !(
          value.slice(-1) === "+" ||
          value.slice(-1) === "-" ||
          value.slice(-1) === "*" ||
          value.slice(-1) === "/"
        )
      ) {
        value = value.slice(-1);
      }
      flag = false;
    }

    if (power.value === "OFF") {
      if (value.length > 2 && value.slice(-3) === "OFF") {
        value = "";
        display.value = "";
        power.value = "ON";
        power.innerHTML = "OFF";
      } else {
        display.value = "TURN 🔛";
      }
    } else if (power.value === "ON") {
      if (value.length > 1 && value.slice(-2) === "ON") {
        value = "";
        display.value = value;
        power.value = "OFF";
        power.innerHTML = "ON";
      } else if (
        value.slice(-1) === "+" ||
        value.slice(-1) === "-" ||
        value.slice(-1) === "*" ||
        value.slice(-1) === "/"
      ) {
        if (
          value.length >= 2 &&
          (value.slice(-2, -1) === "+" ||
            value.slice(-2, -1) === "-" ||
            value.slice(-2, -1) === "*" ||
            value.slice(-2, -1) === "/")
        ) {
          display.value = value.slice(0, value.length - 2) + value.slice(-1);
          value = value.slice(0, value.length - 2) + value.slice(-1);
        } else {
          display.value = value;
        }
      } else if (value.slice(-2) === "AC") {
        display.value = "";
        value = "";
      } else if (value.slice(-3) === "DEL") {
        if (value === "DEL") {
          value = "";
        } else {
          value = value.slice(0, value.length - 4);
        }
        display.value = value;
      } else if (value.slice(-1) === "=") {
        if (
          value.slice(-2, -1) === "+" ||
          value.slice(-2, -1) === "-" ||
          value.slice(-2, -1) === "*" ||
          value.slice(-2, -1) === "/"
        ) {
          display.value = value.slice(0, value.length - 2);
          value = value.slice(0, value.length - 2);
        } else {
          display.value = eval(value.slice(0, value.length - 1));
          value = display.value;
          flag = true;
          console.log(flag);
        }
      } else {
        display.value = value;
      }
    }
  }
});
