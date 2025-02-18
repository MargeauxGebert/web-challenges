console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPost = document.createElement("article");
const newPostContent = document.createElement("p");
const newPostFooter = document.createElement("footer");
const newPostUserName = document.createElement("span");
const newPostButton = document.createElement("button");

newPost.classList.add("post");
newPostContent.classList.add("post__content");
newPostFooter.classList.add("post__footer");
newPostUserName.classList.add("post__username");
newPostButton.classList.add("post__button");

newPostContent.textContent =
  "Hello, I like trains! Neeeeeeeeeeeeeeeeeeeeeeeeeeeow!";

newPostUserName.textContent = "@margeaux_gebert";

newPostButton.addEventListener("click", handleLikeButtonClick);
newPostButton.textContent = "♥ Like";

document.body.append(newPost);
newPost.append(newPostContent, newPostFooter);
newPostFooter.append(newPostUserName, newPostButton);
