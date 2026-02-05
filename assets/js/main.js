document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. MENÚ HAMBURGUESA (MÓVIL)
       ========================================= */
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const closeBtn = document.querySelector('.nav__close-btn');
    const navLinks = document.querySelectorAll('.nav__link'); // Todos los enlaces

    if (hamburger && nav) {
        // Abrir menú
        hamburger.addEventListener('click', () => {
            nav.classList.add('active');
        });

        // Cerrar menú con botón X
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        }

        // Cerrar menú al hacer click en cualquier enlace (Importante para la UX)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });
    }


    /* =========================================
       2. CARRUSEL INFINITO (Home Page)
       ========================================= */
    const track = document.querySelector('.carousel-track');

    if (track) {
        // Clonamos las tarjetas para el efecto infinito
        const cards = Array.from(track.children);
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            clone.setAttribute('aria-hidden', true); 
            track.appendChild(clone);
        });
    }


    /* =========================================
       3. FORMULARIO DE RESERVA (Booking Page)
       ========================================= */
    const bookingForm = document.getElementById('bookingForm');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Reservation Request Sent! We will contact you shortly to confirm.');
            bookingForm.reset();
        });
    }

});