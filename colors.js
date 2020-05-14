export const colorsArray = ["#FEC300", "#BDD00C", "#77D6BE", "#3D98C1", "#F6517A", "#F75151", "#F27618"];

// Function for swapping through colours
export function changeColor(count, array, element) {
  // If at end of array...
  if (count == array.length - 1) {
    // Reset
    count = 0;
    // If somewhere else in array
  } else {
    // Add one to count
    count += 1;
  }
  // Apply colour according to array
  element.style.backgroundColor = array[count];
  // Return the value to be stored in the global count variable elsewhere
  return count;
}
