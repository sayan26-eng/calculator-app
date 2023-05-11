const screenDisplay = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

let calculation = [];
let accumulativeCalculations;

function calculate(button) {
  const value = button.textContent;
  if (value === "CLEAR") {
    calculation = [];
    screenDisplay.textContent = "0";
  } else if (value === "=") {
    screenDisplay.textContent = eval(accumulativeCalculations);
    calculation = [];
    accumulativeCalculations = "";
  } else {
    calculation.push(value);
    accumulativeCalculations = calculation.join("");
    screenDisplay.textContent = accumulativeCalculations;
  }
}
buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);
