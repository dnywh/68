const yellow = "#FEC300";
const green = "#BDD00C";
const cyan = "#77D6BE";
const blue = "#3D98C1";
const purple = "#CD72d5";
const red = "#F75151";
const orange = "#F68128";
export const colorsArray = [yellow, green, cyan, blue, purple, red, orange];
// Note that the first colour is manually set as $color-initial in SCSS

// Function for swapping through colours
export function changeColor(count, array, bgElements, linksCollection) {
  // If at end of array...
  if (count == array.length - 1) {
    // Reset
    count = 0;
    // If somewhere else in array
  } else {
    // Add one to count
    count += 1;
  }
  // Apply background colour according to array
  bgElements.forEach((element) => (element.style.backgroundColor = array[count]));

  // Turn links HTMLCollection into an array
  Array.from(linksCollection).forEach(
    (element) =>
      // Override array contents' border colours
      (element.style.borderColor = array[count])
  );

  // Override links' hover colour
  const sheet = window.document.styleSheets[0];
  sheet.insertRule(`a:hover { color: ${array[count]}; }`, sheet.cssRules.length);

  // Return the value to be stored in the global count variable elsewhere
  return count;
}
