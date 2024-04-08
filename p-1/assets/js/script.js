let output = document.getElementById("output");
var num1, num2, opr;

function getNum(num) {
  output.value += num;
}

function clearOutput() {
  output.value = null;
}

function getOpr(input) {
  opr = input;
  num1 = parseInt(output.value);
  clearOutput();
}

function calculate() {
  let ans;

  num2 = parseFloat(output.value);

  switch (opr) {
    case '+':
      ans = num1 + num2;
      break;

    case '-':
      ans = num1 - num2;
      break;

    case '*':
      ans = num1 * num2;
      break;

    case '/':
      ans = num1 / num2;
      break;
  }

  output.value = ans;
}

clearOutput();