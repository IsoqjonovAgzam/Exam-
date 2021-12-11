// Variables
const btnOpen = document.getElementById('nav-open');
const btnClose = document.getElementById('nav-close');
const menu = document.getElementById('nav-menu');

// Main
btnOpen.addEventListener('click', () => {
    menu.classList.toggle('show');
});
btnClose.addEventListener('click', () => {
    menu.classList.toggle('show');
});