const clear = document.querySelector("#clearBtn");
const display = document.querySelector("#screen");
const divideBtn = document.querySelector("#divideBtn");
const multiplyBtn = document.querySelector("#multiplyBtn");
const addBtn = document.querySelector("#addBtn");
const screen = document.querySelector("#screen");
const equalsBtn = document.querySelector("#equalsBtn");
let operand;

divideBtn.addEventListener("click", function() {
    continuingMath();
    operand = "divide";
});

multiplyBtn.addEventListener("click", function() {
    continuingMath();
    operand = "multiply";
});

addBtn.addEventListener("click", function() {
    continuingMath();
    operand = "add";
});

subtractBtn.addEventListener("click", function() {
    continuingMath();
    operand = "subtract";
});

equalsBtn.addEventListener("click", function() {
    clearScreen();
    storeNumbersSelectedVar2();
    operator(operand, firstNum, secondNum);
});

const buttonObj = {};
for (let i = 0; i < 10; i++) {
    buttonObj[`number${i}`] = document.querySelector(`#number${i}`);
    buttonObj[`number${i}`].addEventListener("click", function() {
        updateNumbers(i);
        renderScreenOnKeyDown();
    });
}

function renderScreenOnKeyDown() {
    let textInput = numbersSelected.join("");
    screen.textContent = textInput;
    return textInput;
}
let firstNum;

function storeNumbersSelectedVar1() {
    let numString = numbersSelected.join("");
    firstNum = parseInt(numString, 10);
    return firstNum;
}
let secondNum;

function storeNumbersSelectedVar2() {
    let numString2 = numbersSelected.join("");
    secondNum = parseInt(numString2, 10);
    return secondNum;
}

function clearScreen() {
    screen.textContent = "";
}

let numbersSelected = [];

function clearNumbersSelected() {
    numbersSelected.length = 0;
    return numbersSelected;
}

function updateNumbers(number) {
    numbersSelected.push(number);
    return numbersSelected;
}
clear.addEventListener("click", function() {
    clearNumbersSelected();
    clearScreen();
    fullClear();
    console.log(numbersSelected);
});
let answer;

function add(x, y) {
    answer = x + y;
    roundedAnswer = Math.round(answer * 10) / 10;
    screen.textContent = roundedAnswer;
    firstNum = roundedAnswer;
    secondNum = undefined;
    return roundedAnswer;
}

function subtract(x, y) {
    answer = x - y;
    roundedAnswer = Math.round(answer * 10) / 10;
    screen.textContent = roundedAnswer;
    secondNum = undefined;
    firstNum = roundedAnswer;
    return roundedAnswer;
}

function multiply(x, y) {
    answer = x * y;
    roundedAnswer = Math.round(answer * 10) / 10;
    screen.textContent = roundedAnswer;
    secondNum = undefined;
    firstNum = roundedAnswer;
    return roundedAnswer;
}

function divide(firstNum, secondNum) {
    if (secondNum === 0) {
        screen.textContent = "Not by 0";
    } else {
        answer = firstNum / secondNum;
        roundedAnswer = Math.round(answer * 10) / 10;
        screen.textContent = roundedAnswer;
        secondNum = undefined;
        firstNum = roundedAnswer;
        return roundedAnswer;
    }
}

function operator(operand, num1, num2) {
    if (operand == "add") {
        return add(num1, num2);
    } else if (operand == "subtract") {
        return subtract(num1, num2);
    } else if (operand == "multiply") {
        return multiply(num1, num2);
    } else if (operand == "divide") {
        return divide(num1, num2);
    } else {
        return "ERROR";
    }
}

function continuingMath() {
    clearScreen();
    if (!operand) {
        storeNumbersSelectedVar1();
        clearNumbersSelected();
    } else if (!!operand) {
        storeNumbersSelectedVar2();
        operator(operand, firstNum, secondNum);
        operand = "";
        clearNumbersSelected();
    }
}

function fullClear() {
    firstNum = undefined;
    secondNum = undefined;
    operand = undefined;
}