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
  // @ts-ignore
  closeBtn.classList.toggle('hidden');
  // @ts-ignore
  navBtn.classList.toggle('hidden');
  // @ts-ignore
  navEl.classList.toggle('nav-mobile');
  // @ts-ignore
  bodyEl.classList.toggle('overflow');
  // @ts-ignore
  projectLogo.classList.toggle('opacity');
  // @ts-ignore
  navItems.classList.toggle('mobile-nav-list');
}

// JENERAL OPERATION
// @ts-ignore
navBtn.addEventListener('click', operations);
// @ts-ignore
closeBtn.addEventListener('click', operations);
navLinks.forEach((element) => {
  element.addEventListener('click', () => {
    // @ts-ignore
    bodyEl.classList.remove('overflow');
    // @ts-ignore
    navEl.classList.remove('nav-mobile');
    // @ts-ignore
    navItems.classList.remove('mobile-nav-list');
    // @ts-ignore
    closeBtn.classList.add('hidden');
    // @ts-ignore
    navBtn.classList.remove('hidden');
    // @ts-ignore
    projectLogo.classList.remove('opacity');
  });
});