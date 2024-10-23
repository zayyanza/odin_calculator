let firstNumber = "";
let secondNumber = "";
let operator;
let display_value = "";

function add(a, b) {
    return Number(a) + Number(b);
}

function substract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    return Number(a) / Number(b);
}


function operate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
            break;
        case "-":
            return substract(firstNumber, secondNumber);
            break;
        case "×":
            return multiply(firstNumber, secondNumber);
            break;
        case "÷":
            return divide(firstNumber, secondNumber);
            break;
        default:
            break;
    }
}

function clearScreen() {
    CurrentScreen.textContent = "0";
    LastScreen.textContent = "";
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
    const hasOperator = CurrentScreen.textContent.includes("+") ||
                    CurrentScreen.textContent.includes("-") ||
                    CurrentScreen.textContent.includes("÷") ||
                    CurrentScreen.textContent.includes("×");
    if (CurrentScreen.textContent.includes(".") && !hasOperator) {
        return;
    } else if (hasOperator) {
        operands = CurrentScreen.textContent.split(operator);
        if (operands[1].length <= 1) {
            return;
        } else if (operands[1].includes(".")) {
            return;
        } else {
            CurrentScreen.textContent += ".";
        }
    } else {
        CurrentScreen.textContent += ".";
    }
    
}

function appendOperator(Operator) {
    const hasOperator = CurrentScreen.textContent.includes("+") ||
                    CurrentScreen.textContent.includes("-") ||
                    CurrentScreen.textContent.includes("÷") ||
                    CurrentScreen.textContent.includes("×");

    if (hasOperator && CurrentScreen.textContent.length > (firstNumber.length + 3)) {
        result = equalsClick().toString();
        firstNumber = result;
        operator = Operator;
        CurrentScreen.textContent = LastScreen.textContent + " " + Operator + " ";
    } else if (LastScreen.textContent !== "") {
        firstNumber = LastScreen.textContent;
        operator = Operator;
        CurrentScreen.textContent = `${LastScreen.textContent} ${Operator} `
    } else {
        firstNumber = CurrentScreen.textContent;
        operator = Operator;
        CurrentScreen.textContent += ` ${Operator} `;
    }

}

function equalsClick() {
    operands = CurrentScreen.textContent.split(operator);
    result = operate(firstNumber, operands[1], operator);
    LastScreen.textContent = result.toString();
    return result;
}


const CurrentScreen = document.querySelector(".screen-value");
CurrentScreen.textContent = "0";

const LastScreen = document.querySelector(".LastScreen-value");
LastScreen.textContent = "";

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

const equalButton = document.querySelector(".btn.equal");
equalButton.addEventListener("click", () => equalsClick())