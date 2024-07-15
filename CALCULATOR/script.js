const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id === "clear") {
      display.innerText = "0";
    } else if (item.id === "ac") {
      let currentDisplay = display.innerText;
      display.innerText = currentDisplay.slice(0, -1);
      if (display.innerText === "") {
        display.innerText = "0";
      }
    } else if (item.id === "%") {
      display.innerText = applyPercentage(display.innerText);
    } else if (item.id === "=") {
      display.innerText = evaluateExpression(display.innerText);
    } else if (item.id === "dot") {
      if (!display.innerText.includes(".")) {
        display.innerText += ".";
      }
    } else {
      if (display.innerText === "0" && item.id !== "dot") {
        display.innerText = item.innerText;
      } else {
        display.innerText += item.innerText;
      }
    }
  };
});
function evaluateExpression(expression) {
  try {
    return eval(expression);
  } catch (error) {
    return "Error";
  }
}
function applyPercentage(expression) {
  try {
    const result = eval(expression);
    return (result / 100).toString();
  } catch (error) {
    return "Error";
  }
}
