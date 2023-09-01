// Obtén todos los enlaces de navegación
const navLinks = document.querySelectorAll('nav ul li a');

// Itera a través de los enlaces y agrega un oyente de eventos para controlar la navegación
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Previene el comportamiento predeterminado del enlace
        event.preventDefault();
        
        // Remueve la clase activa de todos los enlaces
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Agrega la clase activa solo al enlace seleccionado
        this.classList.add('active');
        
        // Obtiene la URL del enlace seleccionado y redirecciona a esa página
        const linkURL = this.getAttribute('href');
        window.location.href = linkURL;
    });
});

