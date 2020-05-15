// Bring in advice as array of strings
import { adviceArray } from "/advice.js";
import { colorsArray, changeColor } from "/colors.js";

// Add a background colour the advice-section and prepare the counter
const adviceSection = document.getElementById("advice-section");
let counter = 0;
adviceSection.style.backgroundColor = colorsArray[counter];

// Get all elements with an underline so their bottom border can be recoloured dynamically
const links = document.getElementsByTagName("a");

// Style `button` fill

// Target the element to house the chosen string
const element = document.getElementById("advice");
// Get a random item from advice array
let randomItem = adviceArray[Math.floor(Math.random() * adviceArray.length)];
// Add random item to element for page load
element.textContent = randomItem;

// 1. Access buttons
const buttons = Array.from(document.getElementsByTagName("button"));
// Get the first, in advice-section, button
const buttonOne = buttons[0];
// Get the second, in attribution-section, button
const buttonTwo = buttons[1];
// Set button content
buttons.forEach((button) => (button.innerHTML = "Show me<br> another"));

// changeColor(counter - 1, colorsArray, adviceSection, links);
const elementsForBackgroundColorChange = [adviceSection, buttonTwo];

// 3. Prepare function to handle getting a random string
function showRandomAdvice() {
  // Running function...
  // Handle colour changing
  counter = changeColor(counter, colorsArray, elementsForBackgroundColorChange, links);

  element.classList.add("end-pos");
  randomItem = adviceArray[Math.floor(Math.random() * adviceArray.length)];

  setTimeout(function () {
    element.textContent = randomItem;
    element.classList.remove("end-pos");
    element.classList.add("start-pos");
    buttons.forEach((button) => (button.innerHTML = "And<br> another"));
  }, 200);
  setTimeout(function () {
    element.classList.remove("start-pos");
  }, 400);
}

// 4. Add event handlers to relevant interactions
// Handle on button click
buttons.forEach((button) => button.addEventListener("click", showRandomAdvice));
// buttonOne.addEventListener("click", showRandomAdvice);
// Handle on spacebar or arrow-right key press
document.addEventListener("keyup", (event) => {
  if (event.code === "Space" || event.code === "ArrowRight") {
    showRandomAdvice();
  }
});
