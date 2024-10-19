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

function appendNumber(number) {
    CurrentScreen.textContent += number;
}

const CurrentScreen = document.querySelector(".screen-value");
CurrentScreen.textContent = "";

const LastScreen = document.querySelector(".LastScreen-value");
LastScreen.textContent = "Hello";

const numButton = document.querySelectorAll(".btn");
numButton.forEach((button) => {
    button.addEventListener("click", () => appendNumber(button.textContent))
})