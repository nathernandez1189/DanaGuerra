// Función para mostrar/ocultar el menú en pantallas pequeñas
function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
}

// Función de animación suave al hacer scroll hacia una sección específica
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Animación de aparición suave para las secciones cuando aparecen en el viewport
function animateOnScroll() {
    const elements = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
}

// Llamar a la función en cada evento de scroll
window.addEventListener('scroll', animateOnScroll);

// Botón de desplazamiento hacia arriba
const scrollUpBtn = document.querySelector('.scroll-up');

// Mostrar/Ocultar el botón según la posición de scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollUpBtn.classList.add('show');
    } else {
        scrollUpBtn.classList.remove('show');
    }
});

// Función para desplazarse hacia arriba al hacer clic en el botón
scrollUpBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;
    const totalItems = galleryItems.length;

    function updateButtons() {
        // Ocultar el botón de "prev" si estamos en la primera imagen
        prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
        // Ocultar el botón de "next" si estamos en la última imagen
        nextButton.style.display = currentIndex === totalItems - 1 ? 'none' : 'block';
    }

    function showSlide(index) {
        // Desplazar el contenedor de la galería para mostrar la imagen correspondiente
        gallery.style.transition = 'transform 0.5s ease-in-out';
        gallery.style.transform = `translateX(-${index * 100}%)`;
        updateButtons(); // Actualizar la visibilidad de los botones
    }

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) { // Solo si no estamos en la primera imagen
            currentIndex--;
            showSlide(currentIndex);
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentIndex < totalItems - 1) { // Solo si no estamos en la última imagen
            currentIndex++;
            showSlide(currentIndex);
        }
    });

    // Inicializa la galería mostrando la primera imagen y actualiza los botones
    showSlide(currentIndex);
    updateButtons(); // Llamamos a la función una vez al principio para configurar la visibilidad inicial
});


