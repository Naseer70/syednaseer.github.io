// script.js

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1200,
});

// Typed.js for typing animation
const typed = new Typed('.typed-text', {
  strings: ['Software Engineer', 'Front-End Developer', 'Tech Enthusiast'],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

// GSAP for advanced animations
gsap.from("#header", {
  duration: 1,
  y: "-100%",
  ease: "bounce"
});

gsap.from(".profile-image", {
  duration: 1,
  opacity: 0,
  scale: 0,
  ease: "elastic",
  delay: 0.5
});

gsap.from(".btn-primary", {
  duration: 1,
  opacity: 0,
  y: 50,
  ease: "power4.out",
  delay: 1
});

// Change header style on scroll
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Add media query to adjust header styles for small screens
const mediaQuery = window.matchMedia('(max-width: 768px)');

if (mediaQuery.matches) {
  gsap.set("#header", {
    y: 0,
    ease: "none"
  });
  gsap.set(".profile-image", {
    scale: 1,
    ease: "none"
  });
  gsap.set(".btn-primary", {
    y: 0,
    ease: "none"
  });
}

mediaQuery.addListener(function () {
  if (mediaQuery.matches) {
    gsap.set("#header", {
      y: 0,
      ease: "none"
    });
    gsap.set(".profile-image", {
      scale: 1,
      ease: "none"
    });
    gsap.set(".btn-primary", {
      y: 0,
      ease: "none"
    });
  } else {
    gsap.from("#header", {
      duration: 1,
      y: "-100%",
      ease: "bounce"
    });
    gsap.from(".profile-image", {
      duration: 1,
      opacity: 0,
      scale: 0,
      ease: "elastic",
      delay: 0.5
    });
    gsap.from(".btn-primary", {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power4.out",
      delay: 1
    });
  }
});
// Add event listener to profile picture
document.querySelector('.profile-picture').addEventListener('click', function() {
  // Scroll to home section
  document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
});