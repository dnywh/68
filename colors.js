export const colorsArray = ["#FEC300", "#BDD00C", "#77D6BE", "#3D98C1", "#F6517A", "#F75151", "#F27618"];
// Note that the first colour is manually set as $color-initial in SCSS

// Function for swapping through colours
export function changeColor(count, array, bgElement, linksCollection) {
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
  bgElement.style.backgroundColor = array[count];

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
