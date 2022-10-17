const Add = "add";
const Multi = "multi";
const Subtract = "subtract";

function calc(action, a, b) {
  if (Number.isInteger(a, b)) {
    switch (action) {
      case Add:
        return a + b;
      case Multi:
        return a * b;
      case Subtract:
        return a - b;
    }
  } else {
    return console.log("Не число");
  }
}

console.log(calc(Subtract, 3, 2));
console.log(calc(Multi, 1, 2));
console.log(calc(Add, 1, 2));


