import { adviceArray } from "/advice.js";

const element = document.getElementById("advice");

let randomItem = adviceArray[Math.floor(Math.random() * adviceArray.length)];
element.textContent = randomItem;
// console.log(randomItem);

// 1. Create the button
const button = document.createElement("button");
button.innerHTML = "↑ Show me another";
button.classList.add("button", "primary");

// 2. Append somewhere
const learnMoreButton = document.getElementById("learn-more-button");
const buttonContainer = document.getElementById("button-container");
buttonContainer.appendChild(button);
button.after(learnMoreButton);

// 3. Add event handler
button.addEventListener("click", function () {
  randomItem = adviceArray[Math.floor(Math.random() * adviceArray.length)];
  element.textContent = randomItem;
  button.innerHTML = "↑ And another";
});
