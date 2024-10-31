document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        hamburger.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            navLinks.classList.remove('show');
            hamburger.classList.remove('active');
        }
    });

    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownToggle = document.querySelector('.dropdown-toggle');

    dropdownToggle.addEventListener('click', (e) => {
        e.preventDefault();
        dropdownMenu.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdownMenu.classList.remove('show');
        }
    });

    // Remove the articles array and content generation code since articles are now in HTML
    
    // Add error handling for images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', () => {
            img.src = 'images/error.png';
            img.alt = 'Image not found';
        });
    });
});