// ===== FUNCIÓN PARA MOSTRAR SECCIONES =====
function showSlide(slideId) {
    // Ocultar todas las secciones
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Mostrar la sección seleccionada
    const targetSlide = document.getElementById(slideId);
    if (targetSlide) {
        targetSlide.classList.add('active');
        
        // Scroll suave hacia arriba
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// ===== INICIALIZAR LA PÁGINA =====
document.addEventListener('DOMContentLoaded', function() {
    // La página inicia en el home por defecto
    showSlide('home');
});

// ===== EFECTO DE BOTONES AL HACER CLIC =====
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = '';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
});

// ===== TECLA ESC PARA VOLVER AL HOME =====
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        showSlide('home');
    }
});