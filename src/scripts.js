const goup = document.getElementById('goup')
const toggleOptionsButton = document.getElementById('toggle-options');
const optionsMenu = document.getElementById('options-menu');
const changeTheme = document.getElementById('change-theme');
const body = document.body;

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
    optionsMenu.classList.toggle('visible');
  };

  changeTheme.onclick = function() {
    if (body.classList.contains('bg-gray-800')) {
      body.classList.remove('bg-gray-800', 'text-white');
      body.classList.add('bg-white', 'text-gray-800');
    } else {
      body.classList.remove('bg-white', 'text-gray-800');
      body.classList.add('bg-gray-800', 'text-white');
    }
    optionsMenu.classList.toggle('hidden');
    optionsMenu.classList.toggle('visible');
  };
  