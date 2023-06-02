// VARIABLES
const bodyEl = document.querySelector('body');
const closeBtn = document.querySelector('.close-icon');
const navBtn = document.querySelector('.nav-btn');
const navEl = document.querySelector('.navbar');
const navItems = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');
const projectLogo = document.querySelector('');
// NAVBAR
function operations() {
  closeBtn.classList.toggle('hidden');
  navBtn.classList.toggle('hidden');
  navEl.classList.toggle('nav-mobile');
  bodyEl.classList.toggle('overflow');
  projectLogo.classList.toggle('opacity');
  navItems.classList.toggle('mobile-nav-list');
}

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

// VALIDATIONA FORM

const error = document.getElementById('error-message');
const form = document.querySelector('.contact-form');
const userEmail = document.getElementById('user-email');
const errorMessage = 'Please write your email address in lower case';
// CODE
form.addEventListener('submit', (event) => {
  // preventing from submittion
  event.preventDefault();
  const userInput = userEmail.value;
  if (userInput !== userInput.toLowerCase()) {
    error.innerText = errorMessage;
  } else {
    error.innerText = '';
    form.submit();
  }
});

// LOCAL STORAGE
const userName = document.getElementById('user-name');
const userMessage = document.getElementById('user-message');
const contactDetails = {
  fullName: String,
  email: String,
  message: String,
};

form.addEventListener('input', () => {
  contactDetails.fullName = userName.value;
  contactDetails.email = userEmail.value;
  contactDetails.message = userMessage.value;

  localStorage.setItem('contactDetails', JSON.stringify(contactDetails));
});

window.onload = () => {
  const contactData = JSON.parse(localStorage.getItem('contactDetails'));

  if (contactData) {
    userName.value = contactData.fullName;
    userEmail.value = contactData.email;
    userMessage.value = contactData.message;
  }
};