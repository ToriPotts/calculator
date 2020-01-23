function add(x, y) {
  let sum = x + y;
  return sum;
}

function subtract(x, y) {
  let remainder = x - y;
  return remainder;
}

function multiply(x, y) {
  let answer = x * y;
  return answer;
}

function divide(x, y) {
  let ans = x / y;
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
  } else {return "ERROR";}
}
