console.clear();

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
  const windowScrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const webpageHeight = document.body.clientHeight;

  return (windowScrollPosition / (webpageHeight - windowHeight)) * 100;
}

document.addEventListener("scroll", () => {
  const progressBarPercentage = calculateScrollPercentage();
  progressBar.style.width = progressBarPercentage + "%";
});
