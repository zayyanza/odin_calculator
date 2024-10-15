let firstNumber;
let secondNumber;
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

const screen = document.querySelector(".screen-value");
screen.textContent = "Hello";


// let x = operate(5, 2, "/");
// console.log(x);