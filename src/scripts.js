const goup = document.getElementById('goup');
const toggleOptionsButton = document.getElementById('toggle-options');
const optionsMenu = document.getElementById('options-menu');
const changeTheme = document.getElementById('change-theme');
const body = document.body;
const aboutmeSection = document.getElementById('aboutme');
const skillsSection = document.getElementById('skills');
const projectsSection = document.getElementById('projects');
const contactSection = document.getElementById('contact');
const nav = document.getElementById('containernav');
const toggleNav = document.getElementById('toggle-nav');

toggleNav.addEventListener('click', () => {
  nav.classList.toggle('hidden');
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    nav.classList.remove('hidden');
  } else {
    nav.classList.add('hidden');
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

goup.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

toggleOptionsButton.onclick = function() {
  optionsMenu.classList.toggle('hidden');
};

// Función para cambiar el tema
function toggleTheme() {
  if (body.classList.contains('bg-gray-800')) {
    switchToLightMode();
  } else {
    switchToDarkMode();
  }
  optionsMenu.classList.toggle('hidden');
}

// Función para cambiar al modo claro
function switchToLightMode() {
  body.classList.remove('bg-gray-800', 'text-white');
  body.classList.add('bg-white', 'text-gray-800');

  aboutmeSection.classList.remove('bg-gray-400', 'text-gray-800');
  aboutmeSection.classList.add('bg-gray-200', 'text-gray-800');

  skillsSection.classList.remove('bg-gray-800', 'text-white');
  skillsSection.classList.add('bg-white', 'text-gray-800');

  projectsSection.classList.remove('bg-gray-400', 'text-gray-800');
  projectsSection.classList.add('bg-gray-200', 'text-gray-800');

  contactSection.classList.remove('bg-gray-800', 'text-white');
  contactSection.classList.add('bg-white', 'text-gray-800');

  document.querySelectorAll('h1, h2, p, li').forEach(element => {
    element.classList.remove('text-white');
    element.classList.add('text-gray-800');
  });
}

// Función para cambiar al modo oscuro
function switchToDarkMode() {
  body.classList.remove('bg-white', 'text-gray-800');
  body.classList.add('bg-gray-800', 'text-white');

  aboutmeSection.classList.remove('bg-gray-200', 'text-gray-800');
  aboutmeSection.classList.add('bg-gray-400', 'text-gray-800');

  skillsSection.classList.remove('bg-white', 'text-gray-800');
  skillsSection.classList.add('bg-gray-800', 'text-white');

  projectsSection.classList.remove('bg-gray-200', 'text-gray-800');
  projectsSection.classList.add('bg-gray-400', 'text-gray-800');

  contactSection.classList.remove('bg-white', 'text-gray-800');
  contactSection.classList.add('bg-gray-800', 'text-white');

  document.querySelectorAll('h1, h2, p, li').forEach(element => {
    element.classList.remove('text-gray-800');
    element.classList.add('text-white');
  });
}

// Añadir evento al botón de cambio de tema
changeTheme.onclick = toggleTheme;