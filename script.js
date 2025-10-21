// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Skill Gauge Animation on Scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const gauges = entry.target.querySelectorAll('.gauge-fill');
            gauges.forEach(gauge => {
                const skillLevel = gauge.getAttribute('data-skill');
                gauge.style.width = skillLevel + '%';
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillObserver.observe(skillsSection);
}

// Racing Car Animation on Scroll
let lastScrollTop = 0;
let carTimeout;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const racingCar = document.querySelector('.racing-car');
    
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        clearTimeout(carTimeout);
        racingCar.style.opacity = '1';
        racingCar.style.animation = 'carDrive 3s linear forwards';
        
        carTimeout = setTimeout(() => {
            racingCar.style.opacity = '0';
        }, 3000);
    }
    
    lastScrollTop = scrollTop;
});

// Add car drive animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes carDrive {
        0% {
            bottom: -100px;
            left: -100px;
        }
        100% {
            bottom: 50px;
            left: 100%;
        }
    }
`;
document.head.appendChild(style);

// Project Cards Hover Effect
document.querySelectorAll('.race-car').forEach(car => {
    car.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px) scale(1.02)';
    });
    
    car.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0) scale(1)';
    });
});

// Animate Elements on Scroll
const fadeElements = document.querySelectorAll('.metric, .timeline-item, .race-car');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                entry.target.style.transition = 'all 0.6s ease-out';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

fadeElements.forEach(element => {
    fadeObserver.observe(element);
});

// Download Resume Button
document.querySelector('.start-engine-btn').addEventListener('click', function() {
    // Add engine start sound effect (visual feedback)
    this.style.animation = 'engineStart 0.5s ease-out';
    
    // Alert for now - you can replace this with actual resume download
    alert('Resume download feature - Connect your actual resume PDF file here!');
    
    setTimeout(() => {
        this.style.animation = '';
    }, 500);
});

// Add engine start animation
const engineStyle = document.createElement('style');
engineStyle.textContent = `
    @keyframes engineStart {
        0%, 100% { transform: scale(1); }
        25% { transform: scale(0.95) rotate(-2deg); }
        50% { transform: scale(1.05) rotate(2deg); }
        75% { transform: scale(0.98) rotate(-1deg); }
    }
`;
document.head.appendChild(engineStyle);

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 1)';
        navbar.style.boxShadow = '0 5px 20px rgba(225, 6, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active Navigation Link
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = 'var(--accent-red)';
        }
    });
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    const speedLines = document.querySelector('.speed-lines');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 500);
    }
    
    if (speedLines) {
        speedLines.style.transform = `translateX(-${scrolled * 0.2}px)`;
    }
});

// Loading Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});

// Add Particle Effect on Mouse Move (Optional Enhancement)
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Console Welcome Message
console.log('%c🏎️ Welcome to Narayana Reddy\'s Racing Portfolio! 🏁', 
    'color: #e10600; font-size: 20px; font-weight: bold; font-family: Orbitron;');
console.log('%cBuilt with passion and speed ⚡', 
    'color: #ffd700; font-size: 14px;');