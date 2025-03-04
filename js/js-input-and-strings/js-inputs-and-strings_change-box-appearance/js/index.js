console.clear();

function getElement(datajs) {
  return document.querySelector(`[data-js=${datajs}]`);
}

const box = getElement("box");
const inputColor = getElement("input-color");
const inputRadius = getElement("input-radius");
const inputRotation = getElement("input-rotation");

inputColor.addEventListener("input", () => {
  const hue = inputColor.value;
  const colorString = `hsl(${hue}deg, 50%, 50%)`;

  box.style.backgroundColor = colorString;
});

inputRadius.addEventListener("input", () => {
  const radius = inputRadius.value;
  const radiusString = `${radius}%`;

  box.style.borderRadius = radiusString;
});

inputRotation.addEventListener("input", () => {
  const rotation = inputRotation.value;
  const rotationString = `rotate(${rotation}deg)`;

  box.style.transform = rotationString;
});
