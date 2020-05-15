export function showRandomAdvice(counter, colorsArray, elementsForBackgroundColorChange, links, advice, randomItem, buttons) {
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
