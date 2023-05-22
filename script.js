// VARIABLES
const bodyEl = document.querySelector('body');
const closeBtn = document.querySelector('.close-icon');
const navBtn = document.querySelector('.nav-btn');
const navEl = document.querySelector('.navbar');
const projectLogo = document.querySelector('.nav-logo');
const sections = document.querySelectorAll('section'); 

// FUNCTIONS
function toggleNav() {
  // @ts-ignore
  navEl.classList.toggle('nav-active');
  // @ts-ignore
  bodyEl.classList.toggle('no-scroll');
}

function closeNav() {
  // @ts-ignore
  navEl.classList.remove('nav-active');
  // @ts-ignore
  bodyEl.classList.remove('no-scroll');
}

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  targetSection.scrollIntoView({ behavior: 'smooth' });
}

// EVENT LISTENERS
// @ts-ignore
navBtn.addEventListener('click', toggleNav);
// @ts-ignore
closeBtn.addEventListener('click', closeNav);

// @ts-ignore
navItems.forEach((link) => {
  link.addEventListener('click', (event) => {
    smoothScroll(event);
    closeNav();
  });
});

sections.forEach((section) => {
  section.addEventListener('click', closeNav);
});
