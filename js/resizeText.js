export function resizeText(textLength, element) {
  const monotonicNumber = (1.1 / textLength) * 1000;
  const mappedFontSize = scaleValue(monotonicNumber, [1, 30], [10, 30]);
  const mappedLineHeight = scaleValue(monotonicNumber, [1, 30], [160, 130]);

  if (window.innerWidth >= 768) {
    element.style.fontSize = `${mappedFontSize / 6}rem`;
    element.style.lineHeight = `${mappedLineHeight / 1}%`;
  } else {
    element.style.fontSize = `${mappedFontSize / 10}rem`;
    element.style.lineHeight = `${mappedLineHeight / 1}%`;
  }
  console.log(element.style.lineHeight);
}

function scaleValue(value, from, to) {
  const scale = (to[1] - to[0]) / (from[1] - from[0]);
  const capped = Math.min(from[1], Math.max(from[0], value)) - from[0];
  return ~~(capped * scale + to[0]);
}
