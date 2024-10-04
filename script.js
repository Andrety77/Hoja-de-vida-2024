document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('nav ul li a'); // Cambiar a 'a' en lugar de 'button'
    const sections = document.querySelectorAll('.content-section');
    const modeToggle = document.createElement('button'); // Botón de modo oscuro/claro
    modeToggle.textContent = '🌞 Modo Claro';
    modeToggle.style.position = 'fixed';
    modeToggle.style.top = '10px';
    modeToggle.style.right = '10px';
    modeToggle.style.padding = '10px';
    modeToggle.style.border = 'none';
    modeToggle.style.backgroundColor = '#8a2be2';
    modeToggle.style.color = '#fff';
    modeToggle.style.cursor = 'pointer';
    modeToggle.style.zIndex = '1000';
    document.body.appendChild(modeToggle);

    // Funcionalidad para cambiar secciones
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevenir el comportamiento por defecto
            const targetId = button.getAttribute('data-section');
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.add('active');
                    showNotification(`Cambiando a: ${section.querySelector('h2').textContent} 🔄⚙️`);
                    section.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });

    // Funcionalidad del botón de modo oscuro/claro
    modeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            modeToggle.textContent = '🌙 Modo Oscuro';
        } else {
            modeToggle.textContent = '🌞 Modo Claro';
        }
    });
});

// Función para mostrar notificaciones
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.backgroundColor = '#160c23'; // Cambiado a un morado más elegante
    notification.style.color = '#fff';
    notification.style.padding = '10px';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = '1000';
    notification.style.transition = 'opacity 0.5s';
    document.body.appendChild(notification);
    
    // Ocultar notificación después de 2 segundos
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 2000);
}