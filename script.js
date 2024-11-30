// Testimonial Slider Logic
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

setInterval(() => {
  testimonials[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % testimonials.length;
  testimonials[currentIndex].style.display = 'block';
}, 3000);
// JavaScript to toggle the navigation menu
document.getElementById("hamburger").addEventListener("click", function () {
  const navMenu = document.getElementById("nav-menu").querySelector("ul");
  navMenu.classList.toggle("active");
});

