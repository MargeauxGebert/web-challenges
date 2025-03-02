console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

// function renderStars() {
//   // Reset the star container before re-rendering stars
//   starContainer.innerHTML = "";

//   // --v-- write or modify code below this line --v--
// for(let starValue = 1; starValue <=5; starValue++) {
//   const starImg = document.createElement("img");
//   starImg.setAttribute("src", "../assets/star-empty.svg");
//   starContainer.append(starImg);
// }
//   // --^-- write or modify code above this line --^--
// }

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";
  // --v-- write or modify code below this line --v--
for(let starValue = 1; starValue <=5; starValue++) {
  const starImg = document.createElement("img");

  if (starValue > filledStars) {
  starImg.setAttribute("src", "../assets/star-empty.svg");
  } else {
    starImg.setAttribute("src", "../assets/star-filled.svg");
  }
starImg.addEventListener("click", () => {
renderStars(starValue);
});

  starContainer.append(starImg);

}
  // --^-- write or modify code above this line --^--
}

renderStars();
