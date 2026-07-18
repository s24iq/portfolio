// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

if (menuToggle && navbar) {
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuToggle.classList.toggle('bx-x');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuToggle.classList.remove('bx-x');
        });
    });
}

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 0);
    }
});

// Active link based on section and smooth scrolling
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    // Active link based on section
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 300) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === #${current}){
                link.classList.add('active');
            }
        });
    });

    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animation on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.home-content, .home-img, .btn-box, .home-sci');
        
        elements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animation
    const homeContent = document.querySelector('.home-content');
    const homeImg = document.querySelector('.home-img');
    const btnBox = document.querySelector('.btn-box');
    const homeSci = document.querySelector('.home-sci');
    
    if (homeContent) homeContent.style.opacity = '0';
    if (homeContent) homeContent.style.transform = 'translateY(-50px)';
    if (homeImg) homeImg.style.opacity = '0';
    if (homeImg) homeImg.style.transform = 'translateY(50px)';
    if (btnBox) btnBox.style.opacity = '0';
    if (homeSci) homeSci.style.opacity = '0';
    
    setTimeout(() => {
        animateOnScroll();
    }, 500);

    window.addEventListener('scroll', animateOnScroll);
});