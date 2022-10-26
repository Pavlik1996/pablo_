function showVerticalMessage(value) {
  let str = "";
  if (value[0] === "s") {
    value = "S" + value.slice(1, 7);
  }
  for (let char of value) {
    str += char + "\n";
  }
  console.log(str);
}

showVerticalMessage("stradaaaa");
