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

    const articles = [
        {
            title: 'Rendang - Warisan Kuliner Dunia',
            image: 'images/rendang.png',
            description: 'Rendang adalah masakan daging yang berasal dari Minangkabau, Sumatra Barat, Indonesia.'
        },
        {
            title: 'Soto Lamongan - Kuah Gurih Khas Jawa Timur',
            image: 'images/soto.png',
            description: 'Soto Lamongan adalah soto ayam khas Lamongan, Jawa Timur.'
        }
    ];

    const content = document.getElementById('content');
    const fragment = document.createDocumentFragment();

    const createArticle = ({ title, image, description }) => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h2>${title}</h2>
            <img src="${image}" alt="${title}" loading="lazy">
            <p>${description}</p>
        `;

        const img = article.querySelector('img');
        img.addEventListener('error', () => {
            img.src = 'images/error.png';
            img.alt = 'Image not found';
        });

        return article;
    };

    articles.forEach(article => {
        fragment.appendChild(createArticle(article));
    });

    content.replaceChildren(fragment);
});