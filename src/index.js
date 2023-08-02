
document.addEventListener("DOMContentLoaded", function () {
  const btnExplore = document.querySelector('a[href="#products"]');
  btnExplore.addEventListener("click", function (e) {
    e.preventDefault();
    const productsSection = document.getElementById("products");
    productsSection.scrollIntoView({ behavior: "smooth" });
  });
});

const hamburger = document.querySelector(".hamburger");
const navbarLinks = document.querySelector(".navbar-links");
hamburger.addEventListener("click", function () {
  navbarLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});
