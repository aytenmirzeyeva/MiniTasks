const menuBtn = document.querySelector("#menu-toggler");
const navLinks = document.querySelector('.nav-links');
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
