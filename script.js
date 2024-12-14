// Fonction pour ajouter la classe visible au défilement
function handleScroll() {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// Écouteur d'événements pour le défilement
window.addEventListener('scroll', handleScroll);

// Initialisation des animations au chargement
window.addEventListener('load', handleScroll);