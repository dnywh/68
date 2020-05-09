// Bring in advice as array of strings
import { adviceArray } from "/advice.js";

// Target the element to house the chosen string
const element = document.getElementById("advice");

// Get a random item from advice array
let randomItem = adviceArray[Math.floor(Math.random() * adviceArray.length)];
// Add random item to element for page load
element.textContent = randomItem;

// Prepare the secondary button for later
const backUpButton = document.getElementById("back-up-button");

// 1. Create the main button
const showAnotherButton = document.createElement("button");
showAnotherButton.innerHTML = "↑ Show me another";
showAnotherButton.classList.add("button", "primary");

// 2. Append main button to page
const learnMoreButton = document.getElementById("learn-more-button");
const buttonContainer = document.getElementById("button-container");
buttonContainer.appendChild(showAnotherButton);
showAnotherButton.after(learnMoreButton);

// 3. Prepare function to handle getting a random string
function showRandomAdvice() {
  randomItem = adviceArray[Math.floor(Math.random() * adviceArray.length)];
  element.textContent = randomItem;
  showAnotherButton.innerHTML = "↑ And another";
}

// 4. Add event handlers to relevant buttons
showAnotherButton.addEventListener("click", showRandomAdvice);
backUpButton.addEventListener("click", showRandomAdvice);
