// Bring in advice as array of strings
import { adviceArray } from "./advice.js";
// Bring in colours
import { colorsArray, changeColor } from "./colors.js";
// Bring in function for resizing text
import { resizeText } from "./resizeText.js";
// Bring in checkbox script
import "./checkbox.js";

// Prepare the advice-section and counter for colour changes
const adviceSection = document.getElementById("advice-section");
let counter = 0;
adviceSection.style.backgroundColor = colorsArray[counter];

// Get all elements with an underline so their bottom border can be recoloured dynamically
const links = document.getElementsByTagName("a");

// Target the element to house the chosen string
const advice = document.getElementById("advice");
// Get a random item from advice array
let randomItem = adviceArray[Math.floor(Math.random() * adviceArray.length)];
// Set advice to random string for page load
advice.textContent = randomItem;
// Adjust font-size depending on length of advice string
resizeText(randomItem.length, advice);

// Access buttons
export const buttons = Array.from(document.getElementsByTagName("button"));
// Get the first, in advice-section, button
const buttonOne = buttons[0];
// Get the second, in attribution-section, button
const buttonTwo = buttons[1];
// Set button content
buttons.forEach((button) => (button.innerHTML = "Show me<br> another"));

const elementsForBackgroundColorChange = [adviceSection, buttonTwo];

// Prepare function to handle getting a random string
export function showRandomAdvice(axis) {
  // Set default axis
  if (axis !== "horizontal" && axis !== "vertical") {
    axis = "vertical";
  }
  // Handle colour changing
  counter = changeColor(counter, colorsArray, elementsForBackgroundColorChange, links);
  // Animate out old advice
  advice.classList.add(`end-pos-${axis}`);
  // Access random advice string
  randomItem = adviceArray[Math.floor(Math.random() * adviceArray.length)];

  setTimeout(function () {
    advice.textContent = randomItem;
    advice.classList.remove(`end-pos-${axis}`);
    // Adjust font-size depending on length of advice string
    resizeText(randomItem.length, advice);
    advice.classList.add(`start-pos-${axis}`);
    buttons.forEach((button) => (button.innerHTML = "And<br> another"));
  }, 200);
  setTimeout(function () {
    advice.classList.remove(`start-pos-${axis}`);
  }, 400);
}

// Add event handlers to relevant interactions:
// Handle on button click
buttons.forEach((button) => button.addEventListener("click", showRandomAdvice));
// Handle on spacebar or arrow-right key press
document.addEventListener("keyup", (event) => {
  if (event.code === "Space" || event.code === "ArrowRight") {
    showRandomAdvice("horizontal");
  }
});

// Allow :active styles to work on button
document.addEventListener("touchstart", function () {}, true);
