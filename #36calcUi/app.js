const ERROR = {
  NO_OPERATOR: "Выберите оператор",
  DIVIDE_ZERO: "Нельзя делить на ноль",
  NO_DIGIT: "Введите числа",
};
document.getElementById("btn").onclick = function () {
  const a = document.getElementById("inOne").value;
  const b = document.getElementById("inTwo").value;
  const operator = document.getElementById("oper").value;
  const out = document.querySelector(".equal p");

  if (a !== "" && b !== "") {
    switch (operator) {
      case "":
        out.textContent = ERROR.NO_OPERATOR;
        break;
      case "+":
        out.textContent = +a + +b;
        break;
      case "-":
        out.textContent = a - b;
        break;
      case "*":
        out.textContent = a * b;
        break;
      case "/":
        if (b === "0") {
          out.textContent = ERROR.DIVIDE_ZERO;
          return;
        }
        out.textContent = a / b;
        break;
    }
  } else {
    out.textContent = ERROR.NO_DIGIT;
  }
};
