document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(18, 18, 18, 0.95)';
    } else {
        navbar.style.background = 'rgba(18, 18, 18, 0.9)';
    }
});

// Add mouse parallax effect for the floating head
document.addEventListener('mousemove', (e) => {
    const head = document.querySelector('.floating-head');
    const mouseX = (window.innerWidth - e.pageX * 2) / 100;
    const mouseY = (window.innerHeight - e.pageY * 2) / 100;
    
    head.style.transform = `translate(${mouseX}px, ${mouseY}px) rotate(${mouseX * 2}deg)`;
});

const menuBtn = document.querySelector('.menu-button');
const sideMenu = document.querySelector('.side-menu');
const closeBtn = document.querySelector('.menu-close');

menuBtn.addEventListener('click', () => {
    sideMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!sideMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        sideMenu.classList.remove('active');
    }
});

// Add this to your existing main.js
function checkScroll() {
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('visible');
        }
    });
}

function scrollToBottom() {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
    });
}

function scrollToVideo() {
    const videoSection = document.querySelector('.video-section');
    videoSection.scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);