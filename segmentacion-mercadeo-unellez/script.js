// ========================================
// GERENCIA DE PROYECTOS - NAVEGACIÓN DE LÁMINAS
// ========================================

// Función principal para mostrar láminas
function showSlide(slideId) {
    // Ocultar todas las láminas
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Mostrar la lámina seleccionada
    const targetSlide = document.getElementById(slideId);
    if (targetSlide) {
        targetSlide.classList.add('active');
        
        // Scroll suave al inicio de la lámina
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Actualizar estado en consola para debugging
    console.log(`Lámina cargada: ${slideId}`);
}

// ========================================
// INICIALIZACIÓN AL CARGAR LA PÁGINA
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    
    // Verificar que la lámina home esté activa por defecto
    const homeSlide = document.getElementById('home');
    if (homeSlide && !homeSlide.classList.contains('active')) {
        homeSlide.classList.add('active');
    }

    // ========================================
    // EFECTOS DE INTERACTIVIDAD
    // ========================================

    // Efecto hover en botones de navegación
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Efecto hover en tarjetas de proceso
    const processCards = document.querySelectorAll('.process-card');
    processCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Efecto hover en tarjetas de contexto
    const contextCards = document.querySelectorAll('.context-card');
    contextCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Efecto hover en items de beneficios
    const benefitItems = document.querySelectorAll('.benefit-item');
    benefitItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // ========================================
    // NAVEGACIÓN CON TECLADO
    // ========================================
    document.addEventListener('keydown', function(event) {
        // Tecla Escape para regresar al inicio
        if (event.key === 'Escape') {
            showSlide('home');
        }

        // Flechas para navegación básica (opcional)
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            const currentSlide = document.querySelector('.slide.active');
            if (currentSlide) {
                const slides = Array.from(document.querySelectorAll('.slide'));
                const currentIndex = slides.indexOf(currentSlide);
                
                if (event.key === 'ArrowLeft' && currentIndex > 0) {
                    const prevSlide = slides[currentIndex - 1];
                    showSlide(prevSlide.id);
                } else if (event.key === 'ArrowRight' && currentIndex < slides.length - 1) {
                    const nextSlide = slides[currentIndex + 1];
                    showSlide(nextSlide.id);
                }
            }
        }
    });

    // ========================================
    // ANIMACIÓN DE ENTRADA PARA ELEMENTOS
    // ========================================
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.attribute-item, .lifecycle-phase, .process-card, .benefit-item, .step-item, .context-card');
        
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight - 100;
            
            if (isVisible) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    // Configurar elementos para animación
    const animatedElements = document.querySelectorAll('.attribute-item, .lifecycle-phase, .process-card, .benefit-item, .step-item, .context-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });

    // Ejecutar animación al cargar y al hacer scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);

    // ========================================
    // MENSAJES DE CONSOLA
    // ========================================
    console.log('%c📊 Gerencia de Proyectos - UNELLEZ', 
        'font-size: 18px; font-weight: bold; color: #1e3a8a;');
    console.log('%c✅ Presentación interactiva cargada correctamente', 
        'font-size: 14px; color: #10b981;');
    console.log('%c🎓 Universidad Nacional Experimental de los Llanos Occidentales "Ezequiel Zamora"', 
        'font-size: 12px; color: #6b7280;');
    console.log('%c© 2026 - José Gregorio García Rodríguez', 
        'font-size: 12px; color: #6b7280;');
});
