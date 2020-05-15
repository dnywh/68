export function resizeText(textLength, element) {
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
