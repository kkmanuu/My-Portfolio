// VARIABLES
const bodyEl = document.querySelector('body');
const closeBtn = document.querySelector('.close-icon');
const navBtn = document.querySelector('.nav-btn');
const navEl = document.querySelector('.navbar');
const navItems = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');
const projectLogo = document.querySelector('.nav-logo');
// FUNCTIONS
function operations() {
  closeBtn.classList.toggle('hidden');
  navBtn.classList.toggle('hidden');
  navEl.classList.toggle('nav-mobile');
  bodyEl.classList.toggle('overflow');
  projectLogo.classList.toggle('opacity');
  navItems.classList.toggle('mobile-nav-list');
}

// JENERAL OPERATION
navBtn.addEventListener('click', operations);
closeBtn.addEventListener('click', operations);
navLinks.forEach((element) => {
  element.addEventListener('click', () => {
    bodyEl.classList.remove('overflow');
    navEl.classList.remove('nav-mobile');
    navItems.classList.remove('mobile-nav-list');
    closeBtn.classList.add('hidden');
    navBtn.classList.remove('hidden');
    projectLogo.classList.remove('opacity');
  });
});