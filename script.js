document.addEventListener('DOMContentLoaded', function() {
    // Menu burger
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav ul');
    
    burgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Fermer le menu quand on clique sur un lien
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // Animation au défilement
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });
    
    const animatedElements = document.querySelectorAll('.team-member, .directrice, .item, .testimonial');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}); 