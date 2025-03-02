console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write or modify code below this line --v--
for(const option in languages) {
  let optionElement = document.createElement("option");
  optionElement.textContent = languages[option];
  select.append(optionElement);
}
// --^-- write or modify code above this line --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write or modify code below this line --v--
for(const navLi in nav) {
  let navLiItem = document.createElement("li");
  let navAnchor = document.createElement("a");
  navAnchor.textContent = nav[navLi].text;
  navAnchor.setAttribute("href", nav[navLi].href);
  ul.append(navLiItem);
  navLiItem.append(navAnchor);
}
// --^-- write or modify code above this line --^--
