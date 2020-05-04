import { adviceArray } from "/advice.js";

const element = document.getElementById("advice");

let randomItem = adviceArray[Math.floor(Math.random() * adviceArray.length)];
element.textContent = randomItem;
// console.log(randomItem);

// 1. Create the button
const button = document.createElement("button");
button.innerHTML = "↑ Show me another";

// 2. Append somewhere
const body = document.getElementsByTagName("section")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener("click", function () {
  randomItem = adviceArray[Math.floor(Math.random() * adviceArray.length)];
  element.textContent = randomItem;
  button.innerHTML = "↑ And another";
});
