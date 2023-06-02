const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  const links = document.querySelector(".nav-links");
  links.classList.toggle("expanded");
});