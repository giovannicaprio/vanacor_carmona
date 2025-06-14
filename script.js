// Instagram feed integration
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
            // Fechar menu mobile ao clicar
            const navMenu = document.getElementById('nav-menu');
            if (window.innerWidth <= 700 && navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
            }
        });
    });

    // Hamburger menu functionality
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });
    }

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const nome = this.querySelector('input[type="text"]').value.trim();
            const email = this.querySelector('input[type="email"]').value.trim();
            const mensagem = this.querySelector('textarea').value.trim();
            
            // Validar apenas nome e mensagem
            if (!nome || !mensagem) {
                alert('Por favor, preencha seu nome e a mensagem.');
                return;
            }
            
            // Montar mensagem para o WhatsApp
            const texto = `Nome: ${nome}%0AEmail: ${email}%0AMensagem: ${mensagem}`;
            const numero = '5551989081823';
            const url = `https://wa.me/${numero}?text=${texto}`;
            
            // Redirecionar para o WhatsApp Web
            window.open(url, '_blank');
            
            // Opcional: resetar o formulário
            this.reset();
        });
    }

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}); 