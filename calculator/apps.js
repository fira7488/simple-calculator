const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");
let currentValue = "";
const MAX_LENGTH = 20; // Max chars allowed

function resizeDisplayFont() {
  let fontSize = 32; // start at 32px
  display.style.fontSize = fontSize + "px";

  while (display.scrollWidth > display.clientWidth && fontSize > 12) {
    fontSize--;
    display.style.fontSize = fontSize + "px";
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      currentValue = "";
      display.textContent = "0";
    } else if (value === "←") {
      currentValue = currentValue.slice(0, -1);
      display.textContent = currentValue || "0";
    } else if (value === "=") {
      try {
        currentValue = eval(currentValue).toString();
        display.textContent = currentValue;
      } catch (err) {
        display.textContent = "Error";
        currentValue = "";
      }
    } else if (value === "$") {
      display.textContent = "Dumbest 😏";
    } else {
      if (currentValue.length >= MAX_LENGTH) {
        // Prevent overflow: do nothing or show a message
        return;
      }
      currentValue += value;
      display.textContent = currentValue;
    }

    resizeDisplayFont();
  });
});
