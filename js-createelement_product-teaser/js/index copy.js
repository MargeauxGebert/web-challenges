console.clear();

const name = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";

const newProduct = document.createElement("article");
const newProductBody = document.createElement("section");
const newProductTextContainer = document.createElement("div");
const newProductImageContainer = document.createElement("div");
const newProductFooter = document.createElement("footer");
const newProductBuyButton = document.createElement("button");

newProduct.classList.add("product");
newProductBody.classList.add("product__body");
newProductTextContainer.classList.add("product__text-container");
newProductImageContainer.classList.add("product__image-container");
newProductFooter.classList.add("product__footer");
newProductBuyButton.classList.add("product__buy-button");

newProductTextContainer.innerHTML = `<h2 class="product__name">${name}</h2>
  <ul class="product__categories">
  <li class="product__category">${category1}</li>
  <li class="product__category">${category2}</li>
  <li class="product__category">${category3}</li></ul>
  <p class="product__description"> ${description}</p>`;

newProductImageContainer.innerHTML = `<img class="product__image" src=${imageSrc}/>`;

newProductFooter.innerHTML = `<span class="product__price">${price}</span>`;

newProductBuyButton.textContent = "Buy";

document.body.append(newProduct);
newProduct.append(newProductBody);
newProductBody.append(newProductTextContainer);
newProductBody.append(newProductImageContainer);
newProduct.append(newProductFooter);
newProductFooter.append(newProductBuyButton);

newProductBuyButton.addEventListener("click", () => {
  console.log(`${name} ${price}`);
});
