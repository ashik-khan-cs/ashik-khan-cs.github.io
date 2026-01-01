// Load Publications from JSON
async function loadPublications() {
    try {
        // Add cache-busting parameter to always fetch fresh data
        const cacheBuster = new Date().getTime();
        const response = await fetch(`publications.json?v=${cacheBuster}`);
        if (!response.ok) throw new Error('Failed to load publications');

        const data = await response.json();
        renderPublications(data);
    } catch (error) {
        console.warn('Could not load publications.json:', error);
        console.log('Using static publications from HTML');
    }
}

function renderPublications(data) {
    const publicationsList = document.querySelector('.publications-list');
    if (!publicationsList) return;

    // Remove loading indicator
    const loadingIndicator = document.querySelector('#publications .section-title + p');
    if (loadingIndicator && loadingIndicator.textContent.includes('Loading')) {
        loadingIndicator.remove();
    }

    // Clear existing publications
    publicationsList.innerHTML = '';

    // Render each publication
    data.publications.forEach(pub => {
        const pubHTML = `
            <div class="publication">
                <div class="pub-number">${pub.number}</div>
                <div class="pub-content">
                    <h3>${pub.title}</h3>
                    <p class="pub-authors"><strong>${pub.authors.split(',')[0].trim()}</strong>${pub.authors.includes(',') ? ',' + pub.authors.split(',').slice(1).join(',') : ''}</p>
                    <p class="pub-venue">${pub.venue ? pub.venue : ''}</p>
                    ${pub.citations > 0 ? `<p class="pub-stats"><i class="fas fa-quote-right"></i> Cited by ${pub.citations}</p>` : ''}
                    ${pub.abstract ? `<p class="pub-abstract">${pub.abstract.substring(0, 500)}${pub.abstract.length > 500 ? '...' : ''}</p>` : ''}
                    <div style="display: flex; gap: 1rem; margin-top: 0.5rem;">
                        ${pub.pub_url ? `<a href="${pub.pub_url}" class="pub-link" target="_blank"><i class="fas fa-external-link-alt"></i> View Paper</a>` : ''}
                        ${pub.scholar_url ? `<a href="${pub.scholar_url}" class="pub-link" target="_blank" style="background: #4285f4;"><i class="fas fa-graduation-cap"></i> Scholar</a>` : ''}
                    </div>
                </div>
            </div>
        `;
        publicationsList.insertAdjacentHTML('beforeend', pubHTML);
    });

    // Re-apply animations to new publications
    document.querySelectorAll('.publication').forEach(pub => {
        pub.style.opacity = '0';
        pub.style.transform = 'translateY(20px)';
        pub.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(pub);
    });

    // Add last updated timestamp
    const container = publicationsList.closest('.container');
    let lastUpdated = document.querySelector('.publications-last-updated');

    if (lastUpdated) {
        lastUpdated.remove();
    }

    if (data.lastUpdated) {
        const timestamp = document.createElement('p');
        timestamp.className = 'publications-last-updated';
        timestamp.style.cssText = 'text-align: center; color: #999; font-size: 0.85rem; margin-top: 1rem;';
        timestamp.innerHTML = `<i class="fas fa-sync-alt"></i> Last updated from Google Scholar: ${new Date(data.lastUpdated).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })}`;
        container.appendChild(timestamp);
    }
}

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
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
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
            
            // Different transforms for different elements
            if (entry.target.classList.contains('timeline-item')) {
                entry.target.style.transform = 'translateX(0)';
            } else {
                entry.target.style.transform = 'translateY(0)';
            }
        }
    });
}, observerOptions);

// Apply animation to cards and timeline items
document.querySelectorAll('.research-card, .publication, .teaching-card, .achievement-card, .education-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Special handling for timeline items
document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    // Add staggered delay for timeline items
    setTimeout(() => {
        observer.observe(item);
    }, index * 100);
});

// Simple fade-in for hero elements
window.addEventListener('load', () => {
    // Load publications from JSON
    loadPublications();
    
    const heroElements = document.querySelectorAll('.hero-text h1, .hero-text h2, .hero-text p, .hero-image');
    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 150);
    });
});

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