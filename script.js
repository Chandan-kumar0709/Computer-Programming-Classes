// Testimonial Slider Logic
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

setInterval(() => {
  testimonials[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % testimonials.length;
  testimonials[currentIndex].style.display = 'block';
}, 3000);

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
