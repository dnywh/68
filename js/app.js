// Bring in advice as array of strings
import { adviceArray } from "./advice.js";
// Bring in colours
import { colorsArray, changeColor } from "./colors.js";
// Bring in checkbox script
import * as checkbox from "./checkbox.js";

// Add a background colour the advice-section and prepare the counter
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
  // Handle colour changing
  counter = changeColor(counter, colorsArray, elementsForBackgroundColorChange, links);
  // Animate out old advice
  advice.classList.add("end-pos");
  // Access random advice string
  randomItem = adviceArray[Math.floor(Math.random() * adviceArray.length)];

  setTimeout(function () {
    advice.textContent = randomItem;
    advice.classList.remove("end-pos");
    // Adjust font-size depending on length of advice string
    resizeText(randomItem.length, advice);
    advice.classList.add("start-pos");
    buttons.forEach((button) => (button.innerHTML = "And<br> another"));
  }, 200);
  setTimeout(function () {
    advice.classList.remove("start-pos");
  }, 400);
}

// 4. Add event handlers to relevant interactions:
// Handle on button click
buttons.forEach((button) => button.addEventListener("click", showRandomAdvice));
// buttonOne.addEventListener("click", showRandomAdvice);
// Handle on spacebar or arrow-right key press
document.addEventListener("keyup", (event) => {
  if (event.code === "Space" || event.code === "ArrowRight") {
    showRandomAdvice();
  }
});

// Allow :active styles to work on button
document.addEventListener("touchstart", function () {}, true);

function resizeText(textLength, element) {
  const monotonicNumber = (1.1 / textLength) * 1000;
  const mappedSize = scaleValue(monotonicNumber, [1, 30], [10, 30]);

  if (window.innerWidth >= 768) {
    element.style.fontSize = `${mappedSize / 6}rem`;
  } else {
    element.style.fontSize = `${mappedSize / 10}rem`;
  }
}

function scaleValue(value, from, to) {
  const scale = (to[1] - to[0]) / (from[1] - from[0]);
  const capped = Math.min(from[1], Math.max(from[0], value)) - from[0];
  return ~~(capped * scale + to[0]);
}
