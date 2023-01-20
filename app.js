let firstOperand = "";
let secondOperand = "";
let currentOperator = null;

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalButton = document.querySelector("#button-equal");
const clearButton = document.querySelector("#button-clear");
const deleteButton = document.querySelector("#button-delete");
const pointButton = document.querySelector("#button-point");
const resultScreen = document.querySelector(".result");
const displayScreen = document.querySelector(".input");

clearButton.addEventListener("click", clearDisplay);
deleteButton.addEventListener("click", deleteNumber);
// equalButton.addEventListener("click", )
numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);


// Display
function appendNumber(number) {
  if (
    displayScreen.textContent == 0 ||
    displayScreen.textContent == firstOperand ||
    displayScreen.textContent == secondOperand
  ) {
    displayScreen.textContent = "";
  }
  displayScreen.textContent += number;
}

// Clear and Delete Buttons
function clearDisplay() {
  displayScreen.textContent = 0;
  resultScreen.textContent = "";
  firstOperand = ""
  secondOperand = ""
  currentOperator = null

}

function deleteNumber() {
  displayScreen.textContent = displayScreen.textContent.slice(0, -1);
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(+num1, +num2);
    case "-":
      return subtract(+num1, +num2);
    case "x":
      return multiply(+num1, +num2);
    case "÷":
      if (num2 == 0) {
        return "You cant divide 0";
      } else {
        return divide(+num1, +num2);
      }
  }
}

// Operator Functions

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
