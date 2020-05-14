// Bring in advice as array of strings
import { adviceArray } from "/advice.js";
import { colorsArray, changeColor } from "/colors.js";

// Add a background colour the advice section and prepare the counter
const adviceSection = document.getElementById("advice-section");
let counter = 0;
adviceSection.style.backgroundColor = colorsArray[counter];

// Target the element to house the chosen string
const element = document.getElementById("advice");

// Get a random item from advice array
let randomItem = adviceArray[Math.floor(Math.random() * adviceArray.length)];
// Add random item to element for page load
element.textContent = randomItem;

// 1. Create the main button
const button = document.createElement("button");
button.innerHTML = "Show me<br> another";

// 2. Append main button to page
const buttonContainer = document.getElementById("advice-section");
buttonContainer.appendChild(button);

// 3. Prepare function to handle getting a random string
function showRandomAdvice() {
  // Handle colour changing
  counter = changeColor(counter, colorsArray, adviceSection);

  element.classList.add("end-pos");
  randomItem = adviceArray[Math.floor(Math.random() * adviceArray.length)];

  setTimeout(function () {
    element.textContent = randomItem;
    element.classList.remove("end-pos");
    element.classList.add("start-pos");
    button.innerHTML = "And<br> another";
  }, 200);
  setTimeout(function () {
    element.classList.remove("start-pos");
  }, 400);
}

// 4. Add event handlers to relevant buttons
button.addEventListener("click", showRandomAdvice);

// Storage ———————————————————————————————————
function changeColorStatic() {
  // If at end of array...
  if (counter == colorsArray.length - 1) {
    // Reset
    counter = 0;
    // If somewhere else in colorsArray
  } else {
    // Add one to counter
    counter += 1;
  }
  console.log(counter, colorsArray[counter]);
  // Apply colour according to colorsArray
  adviceSection.style.backgroundColor = colorsArray[counter];
  // return (counter += 1);
}
