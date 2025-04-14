// DOM Elements
const bookNowBtn = document.querySelector('.book-now');
const ctaBtn = document.querySelector('.cta');
const navLinks = document.querySelectorAll('nav ul li a');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
        nav.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking
            nav.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// Book Now button functionality
bookNowBtn.addEventListener('click', () => {
    document.querySelector('#appointment').scrollIntoView({
        behavior: 'smooth'
    });
});

// CTA button functionality
ctaBtn.addEventListener('click', () => {
    document.querySelector('#appointment').scrollIntoView({
        behavior: 'smooth'
    });
});

// Language Switcher
const languageSelect = document.getElementById('language-select');
languageSelect.addEventListener('change', (e) => {
    const selectedLanguage = e.target.value;
    // Here you would typically redirect to the appropriate language version
    // or load language-specific content
    console.log(`Switching to ${selectedLanguage} language`);
});

// Cookie Consent
const cookieConsent = document.querySelector('.cookie-consent');
const acceptCookiesBtn = document.getElementById('accept-cookies');

if (!localStorage.getItem('cookiesAccepted')) {
    cookieConsent.style.display = 'flex';
}

acceptCookiesBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieConsent.style.display = 'none';
});

// Live Chat
const liveChat = document.querySelector('.live-chat');
liveChat.addEventListener('click', () => {
    // Here you would typically open a chat widget
    // For now, we'll just show an alert
    alert('Chat feature coming soon!');
});

// Appointment Form Validation
const appointmentForm = document.getElementById('appointment-form');
appointmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Basic form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const service = document.getElementById('service').value;
    
    if (!name || !email || !phone || !date || !service) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Here you would typically send the form data to your server
    console.log('Appointment form submitted:', {
        name,
        email,
        phone,
        date,
        service
    });
    
    // Show success message
    alert('Your appointment request has been submitted successfully! We will contact you shortly to confirm.');
    appointmentForm.reset();
});

// Testimonials Carousel
const testimonialsCarousel = document.querySelector('.testimonials-carousel');
let isDragging = false;
let startX;
let scrollLeft;

testimonialsCarousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - testimonialsCarousel.offsetLeft;
    scrollLeft = testimonialsCarousel.scrollLeft;
});

testimonialsCarousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - testimonialsCarousel.offsetLeft;
    const walk = (x - startX) * 2;
    testimonialsCarousel.scrollLeft = scrollLeft - walk;
});

testimonialsCarousel.addEventListener('mouseup', () => {
    isDragging = false;
});

testimonialsCarousel.addEventListener('mouseleave', () => {
    isDragging = false;
});

// Products Carousel
const productsCarousel = document.querySelector('.products-carousel');
let isDraggingProducts = false;
let startXProducts;
let scrollLeftProducts;

productsCarousel.addEventListener('mousedown', (e) => {
    isDraggingProducts = true;
    startXProducts = e.pageX - productsCarousel.offsetLeft;
    scrollLeftProducts = productsCarousel.scrollLeft;
});

productsCarousel.addEventListener('mousemove', (e) => {
    if (!isDraggingProducts) return;
    e.preventDefault();
    const x = e.pageX - productsCarousel.offsetLeft;
    const walk = (x - startXProducts) * 2;
    productsCarousel.scrollLeft = scrollLeftProducts - walk;
});

productsCarousel.addEventListener('mouseup', () => {
    isDraggingProducts = false;
});

productsCarousel.addEventListener('mouseleave', () => {
    isDraggingProducts = false;
});

// View More Button Handler
document.querySelectorAll('.view-btn').forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.product-item');
        const productName = productCard.querySelector('h3').textContent;
        // Here you would typically show more details about the product
        alert(`More information about ${productName} coming soon!`);
    });
});

// Intersection Observer for animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements that should animate
document.querySelectorAll('.service-card, .testimonial-card, .product-item, .blog-card').forEach(element => {
    observer.observe(element);
});

// Initialize product carousel (will be implemented later)
function initProductCarousel() {
    // Carousel functionality will be added here
}

// Initialize appointment form (will be implemented later)
function initAppointmentForm() {
    // Form validation and submission will be added here
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initProductCarousel();
    initAppointmentForm();
});