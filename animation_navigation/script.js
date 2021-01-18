const toggleNavBtn = document.getElementById('toggle_nav');
const nav = document.getElementById('nav');

toggleNavBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});
