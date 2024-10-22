let firstNumber = "5";
let secondNumber = "6";
let operator;
let display_value = "";

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


function operate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
            break;
        case "-":
            return substract(firstNumber, secondNumber);
            break;
        case "*":
            return multiply(firstNumber, secondNumber);
            break;
        case "/":
            return divide(firstNumber, secondNumber);
            break;
        default:
            break;
    }
}

function clearScreen() {
    CurrentScreen.textContent = "0";
}

function appendNumber(number) {
    if (CurrentScreen.textContent === "0") {
        CurrentScreen.textContent = "";
    }
    CurrentScreen.textContent += number;
}

function deleteScreen() {
    CurrentScreen.textContent = CurrentScreen.textContent.slice(0, -1);
    if (CurrentScreen.textContent.toString().length === 0) {
        CurrentScreen.textContent = "0"
    }
}

function appendPoint() {
    if (CurrentScreen.textContent.includes(".")) {
        return;
    }
    CurrentScreen.textContent += ".";
}

function appendOperator(operator) {
    const hasOperator = CurrentScreen.textContent.includes("+") ||
                    CurrentScreen.textContent.includes("-") ||
                    CurrentScreen.textContent.includes("/") ||
                    CurrentScreen.textContent.includes("x");

    if (hasOperator) {
        return;
    }
    CurrentScreen.textContent += operator;
}



const CurrentScreen = document.querySelector(".screen-value");
CurrentScreen.textContent = "0";

const LastScreen = document.querySelector(".LastScreen-value");
LastScreen.textContent = "Hello";

const numButton = document.querySelectorAll("[class='btn']");
numButton.forEach((button) => {
    button.addEventListener("click", () => appendNumber(button.textContent))
});

const clearButton = document.querySelector(".clear-btn");
clearButton.addEventListener("click", () => clearScreen());

const deleteButton = document.querySelector(".del-btn");
deleteButton.addEventListener("click", () => deleteScreen());

const pointButton = document.querySelector(".btn.point");
pointButton.addEventListener("click", () => appendPoint());

const operatorButton = document.querySelectorAll("[class='btn op']");
operatorButton.forEach((button) => {
    button.addEventListener("click", () => appendOperator(button.textContent))
});