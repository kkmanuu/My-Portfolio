// VARIABLES
const project = document.querySelector('#work');

// OBJECT FOR STORING PROJECTS DATA
const projects = [
  {
    image: 'images/Gahec list.png',
    name: 'Todo List',
    details: ['Microverse', 'Front-end', '2023'],
    description:
     ' Efficient JavaScript To-Do List with Status Updates: An enhanced version featuring task management, status updates, and local storage persistence. Users can add, delete, and edit tasks,mark them as completed/incomplete with checkboxes, and easily clear completed tasks',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://kkmanuu.github.io/To-Do-Lists/dist/',
    sourceLink: 'https://github.com/kkmanuu/To-Do-Lists',
  },

  {
    image: 'images/MLeaady..png',
    name: ' LEADERBOARD',
    details: ['Microverse', 'Front-end', '2023'],
    description:
      ' The leaderboard website displays scores submitted by different players and It also allows you to submit your score. ',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://kkmanuu.github.io/Leaderboard/dist/',
    sourceLink: 'https://github.com/kkmanuu/Leaderboard',

  }, 
  {
    image: 'images/Screenshot (7)crypto.png',
    name: 'Tonic',
    details: ['Microverse', 'Back End Dev', '2023'],
    description:
      ' CryptoSphere  is a sophisticated platform for users to access comprehensive information regarding the leading 30 cryptocurrencies ',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://cryptocurrency-agir.onrender.com/',
    sourceLink: 'https://github.com/kkmanuu',
  },
  {
    image: 'images/Screenshot (6).png',
    name: 'Wheels-4-Rent',
    details: ['Front-End', 'Back End Dev', '2023'],
    description:
      '  An application programming interface (API) tailored for car rental services streamlines the integration of rental functionalities into various applications or systems. It empowers users to execute essential tasks associated with vehicle rental, including reservation and inventory management.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'postgreSQL','Reduux'],
    liveLink: 'https://wheels-4-rentv1.onrender.com/',
    sourceLink: 'https://github.com/kkmanuu/Wheels-4-Rent-backend',
  },
];
let template = '';
//  PROJECT ITEM
projects.forEach((project, index) => {
  // ADDING LOOP IN DETAILS PART
  let details = '';
  project.details.forEach((detail) => {
    details += `<li>${detail}</li>`;
  });
  // ANDDING LOOP IN TECHNOLOGIES
  let technologies = '';
  project.technologies.forEach((technology) => {
    technologies += `<li>${technology}</li>`;
  });
  // WRITING HTML
  const code = `
  <div class="projects container">
  <div class="overflow">
          <img class="project-img" src="${project.image}" alt="" />
        </div>
        <div class="project-detail">
          <h3 class="tertiary-heading">${project.name}</h3>
          <ul class="project-details">
            ${details}
          </ul>
          <p class="project-description">
            ${project.description}
          </p>
          <ul class="project-lang">
            ${technologies}
          </ul>
          <button class="btn" id="see-project-${index}">See project</button>
        </div>
        </div>
  `;
  template += code;
});
project.innerHTML = template;

// POPUP window SECTION

const popupContainer = document.createElement('div');
popupContainer.classList.add('popup-container');

function createPopup(project) {
  let details = '';
  project.details.forEach((detail) => {
    details += `<li>${detail}</li>`;
  });

  let technologies = '';
  project.technologies.forEach((technology) => {
    technologies += `<li>${technology}</li>`;
  });

  const popupTemp = `
    <div class="popup">
      <div class="projects container popup-container">
        <div class="project-title">
          <h3 class="tertiary-heading">${project.name}</h3>
          <button class="popup-close-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 25 25"
              stroke-width="1.5"
              stroke="currentColor"
              class="popup-close-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <ul class="project-details">
          ${details}
        </ul>
        <div class="overflow">
          <img class="project-img popup-img" src="${project.image}" alt="" />
        </div>
        <div class="project-detail popup-details">
          <p class="project-description popup-description">
            ${project.description}
          </p>
          <div class="popup-technology">
          <ul class="project-lang">
            ${technologies}
          </ul>
          <div class="check-btn">
          <div class="line">
            <button class="btn popup-btn">
              <span>See live</span>
              <a href="${project.liveLink}" target="_blank"> <svg
              class="popup-logo"
              width="18"
              height="16"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="popup-logo"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z"
                fill="#6070FF"
              />
            </svg></a>
            </button>
            <button class="btn popup-btn">
              <span>See source</span>
              <a href="${project.sourceLink}" target="_blank"><svg class="popup-logo" width="18" height="16" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
              class="popup-logo"
              d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z" fill="#6070FF"/>
              </svg>
              </a>
            </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  `;
  popupContainer.innerHTML = popupTemp;
  document.body.appendChild(popupContainer);
}
const overlay = document.querySelector('.popup');
const seeProjectEl = document.querySelectorAll("[id^='see-project-']");
seeProjectEl.forEach((button, index) => {
  button.addEventListener('click', () => {
    const project = projects[index];
    createPopup(project);
    const popupClose = document.querySelector('.popup-close-btn');
    const closeModal = () => {
      popupContainer.remove();
    };
    popupClose.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
  });
});
