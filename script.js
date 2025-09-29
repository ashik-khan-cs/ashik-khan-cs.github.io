// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation highlight on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const navHeight = document.querySelector('.navbar').offsetHeight;
        
        if (window.scrollY >= (sectionTop - navHeight - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--secondary-color)';
        }
    });
});

// Add scroll shadow to navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Apply animation to cards
document.querySelectorAll('.research-card, .publication, .teaching-card, .timeline-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Typing effect for hero title (optional)
const heroTitle = document.querySelector('.hero-text h1');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let index = 0;
    
    function typeWriter() {
        if (index < text.length) {
            heroTitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Start typing after page loads
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 500);
    });
}

// Add hover effect to social links
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.1)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Load more functionality for publications (if needed in future)
const publicationsList = document.querySelector('.publications-list');
if (publicationsList && publicationsList.children.length > 5) {
    // Show only first 5 publications initially
    Array.from(publicationsList.children).slice(5).forEach(pub => {
        pub.style.display = 'none';
    });
    
    // Add "Show More" button
    const showMoreBtn = document.createElement('button');
    showMoreBtn.textContent = 'Show More Publications';
    showMoreBtn.className = 'show-more-btn';
    showMoreBtn.style.cssText = `
        display: block;
        margin: 2rem auto;
        padding: 0.75rem 2rem;
        background: var(--secondary-color);
        color: white;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 500;
        transition: all 0.3s;
    `;
    
    publicationsList.parentElement.appendChild(showMoreBtn);
    
    showMoreBtn.addEventListener('click', function() {
        const hiddenPubs = Array.from(publicationsList.children).filter(pub => 
            pub.style.display === 'none'
        );
        
        if (hiddenPubs.length > 0) {
            hiddenPubs.forEach(pub => {
                pub.style.display = 'flex';
                pub.style.opacity = '0';
                setTimeout(() => {
                    pub.style.opacity = '1';
                }, 10);
            });
            this.textContent = 'Show Less';
        } else {
            Array.from(publicationsList.children).slice(5).forEach(pub => {
                pub.style.display = 'none';
            });
            this.textContent = 'Show More Publications';
        }
    });
}

// Print CV functionality
function printCV() {
    window.print();
}

// Add print styles
const printStyles = document.createElement('style');
printStyles.innerHTML = `
    @media print {
        .navbar, .nav-toggle, .social-links a[title="Download CV"] {
            display: none !important;
        }
        
        .hero {
            margin-top: 0;
            padding: 40px 0;
        }
        
        .section {
            page-break-inside: avoid;
        }
    }
`;
document.head.appendChild(printStyles);