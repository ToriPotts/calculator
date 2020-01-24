// const number1 = document.querySelector("#number1")
// const number2 = document.querySelector("#number2")
// const number3 = document.querySelector("#number3")
// const number4 = document.querySelector("#number4")
// const number5 = document.querySelector("#number5")
// const number6 = document.querySelector("#number6")
// const number7 = document.querySelector("#number7")
// const number8 = document.querySelector("#number8")
// const number9 = document.querySelector("#number9")
// const number0 = document.querySelector("#number0")
const clear = document.querySelector("#clearBtn");
const display = document.querySelector("#screen");
const divideBtn = document.querySelector("#divideBtn");
const multiplyBtn = document.querySelector("#multiplyBtn");
const addBtn = document.querySelector("#addBtn");
const screen = document.querySelector("#screen");
const equalsBtn = document.querySelector("#equalsBtn");
let operand;

divideBtn.addEventListener("click", function() {
    clearScreen();
    storeNumbersSelectedVar1();
    clearNumbersSelected();
    operand = divide;
});

multiplyBtn.addEventListener("click", function() {
    clearScreen();
    storeNumbersSelectedVar1();
    clearNumbersSelected();
    operand = multiply;
});

addBtn.addEventListener("click", function() {
    clearScreen();
    storeNumbersSelectedVar1();
    clearNumbersSelected();
    operand = add;

});

subtractBtn.addEventListener("click", function() {
    clearScreen();
    storeNumbersSelectedVar1();
    clearNumbersSelected();
    operand = subtract;
});

equalsBtn.addEventListener("click", function() {
    clearScreen();
    storeNumbersSelectedVar2();
    clearNumbersSelected();
    operator(operand, firstNum, secondNum);
})

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
let firstNum

function storeNumbersSelectedVar1() {
    let numString = numbersSelected.join("");
    firstNum = parseInt(numString, 10);
    return firstNum;
}
let secondNum

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
    console.log(numbersSelected);
});
// number1.addEventListener("click", function(){
//     updateNumbers(1);
// });
// number2.addEventListener("click", function() {
//     updateNumbers(2)
// });
// number3.addEventListener("click", function() {
//     updateNumbers(3)
// });
// number4.addEventListener("click", function() {
//     updateNumbers(4)
// });
// number5.addEventListener("click", function() {
//     updateNumbers(5)
// });
// number6.addEventListener("click", function() {
//     updateNumbers(6)
// });
// number7.addEventListener("click", function() {
//     updateNumbers(7)
// });
// number8.addEventListener("click", function() {
//     updateNumbers(8)
// });
// number9.addEventListener("click", function() {
//     updateNumbers(9)
// });
// number0.addEventListener("click", function() {
//     updateNumbers(0)
// });

function add(x, y) {
    let sum = x + y;
    screen.textContent = sum;
    return sum;
}

function subtract(x, y) {
    let remainder = x - y;
    screen.textContent = remainder;
    return remainder;
}

function multiply(x, y) {
    let answer = x * y;
    screen.textContent = answer;
    return answer;
}

function divide(x, y) {
    let ans = x / y;
    screen.textContent = ans;
    return ans;
}

function operator(operand, num1, num2) {
    if (operand == add) {
        return add(num1, num2);
    } else if (operand == subtract) {
        return subtract(num1, num2);
    } else if (operand == multiply) {
        return multiply(num1, num2);
    } else if (operand == divide) {
        return divide(num1, num2);
    } else {
        return "ERROR";
    }
}