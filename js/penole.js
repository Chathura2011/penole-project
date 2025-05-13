const menuButton = document.querySelector('.menu-button');
const menuClose = document.querySelector('.menu-close');
const sideMenu = document.querySelector('.side-menu');
const profile = document.querySelector('.profile');

menuButton.addEventListener('click', () => {
    sideMenu.classList.add('active');
});

menuClose.addEventListener('click', () => {
    sideMenu.classList.remove('active');
});

profile.addEventListener('click', () => {
    sideMenu.classList.add('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!sideMenu.contains(e.target) && 
        !menuButton.contains(e.target) && 
        !profile.contains(e.target)) {
        sideMenu.classList.remove('active');
    }
});