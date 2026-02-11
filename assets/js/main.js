// assets/js/main.js

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Gestion de l'animation au scroll (Reveal)
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    // On lance une fois au chargement pour afficher les éléments du haut
    revealOnScroll();


    // 2. Gestion de l'année automatique dans le footer
    const yearSpan = document.getElementById("year");
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 3. Bouton "Retour en haut"
    const backToTopBtn = document.getElementById("backToTop");
    if(backToTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        });

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
    // ... le code précédent (Reveal, Année, etc.) est au-dessus ...

    // 4. GESTION DU THÈME CLAIR / SOMBRE
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('icon-theme');
    const htmlElement = document.documentElement;

    // Vérifier si un thème est déjà sauvegardé
    const currentTheme = localStorage.getItem('theme');

    // Appliquer le thème sauvegardé au chargement
    if (currentTheme === 'light') {
        htmlElement.setAttribute('data-theme', 'light');
        themeIcon.textContent = '🌙'; // Affiche la lune pour revenir au sombre
        // Petit fix pour le bouton en mode clair
        themeToggleBtn.classList.remove('btn-outline-light');
        themeToggleBtn.classList.add('btn-outline-primary');
    }

    // Au clic sur le bouton
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            // Si on est en mode clair, on passe en sombre
            if (htmlElement.getAttribute('data-theme') === 'light') {
                htmlElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'dark');
                themeIcon.textContent = '☀️';
                
                // Style du bouton
                themeToggleBtn.classList.add('btn-outline-light');
                themeToggleBtn.classList.remove('btn-outline-primary');
            } 
            // Sinon, on passe en mode clair
            else {
                htmlElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                themeIcon.textContent = '🌙';
                
                // Style du bouton
                themeToggleBtn.classList.remove('btn-outline-light');
                themeToggleBtn.classList.add('btn-outline-primary');
            }
        });
    }
});
