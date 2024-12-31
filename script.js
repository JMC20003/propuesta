// Elementos del DOM
const proposal = document.getElementById('proposal');

// Reproducir música desde el inicio de la página
window.addEventListener('load', () => {
    playMusic();
});

// Función para reproducir música descargada
function playMusic() {
    const audio = new Audio("cancion.mp3"); // Asegúrate de que el archivo esté en la misma carpeta
    audio.loop = true; // Reproducir en bucle
    audio.play().catch(error => {
        // Si el navegador bloquea la reproducción, mostrar un botón para habilitarla
        const playButton = document.createElement('button');
        playButton.textContent = "Reproducir Música 🎶";
        playButton.style.marginTop = "20px";
        playButton.style.padding = "10px 20px";
        playButton.style.fontSize = "1rem";
        playButton.style.border = "none";
        playButton.style.borderRadius = "5px";
        playButton.style.cursor = "pointer";
        playButton.style.backgroundColor = "#F5A3C8";
        playButton.style.color = "white";

        playButton.addEventListener('click', () => {
            audio.play();
            playButton.remove(); // Eliminar el botón tras reproducción
        });

        document.body.appendChild(playButton);
    });
}

// Función para crear figuras flotantes aleatorias
function createFloatingShapes() {
    setInterval(() => {
        const figureType = getRandomFigure(); // Obtener una figura aleatoria
        const figure = document.createElement('div');
        figure.classList.add('figure', figureType); // Añadir las clases correspondientes
        
        // Configurar posición aleatoria para las figuras
        figure.style.left = `${Math.random() * window.innerWidth}px`;
        figure.style.animationDuration = `${Math.random() * 3 + 3}s`; // Duración aleatoria para la animación

        // Agregar la figura al body
        document.body.appendChild(figure);

        // Eliminar las figuras después de la animación
        setTimeout(() => {
            figure.remove();
        }, 5000);
    }, 700); // Crear una nueva figura cada 500ms
}
// Función para obtener una figura aleatoria
function getRandomFigure() {
    const shapes = ['circle', 'square', 'triangle'];
    return shapes[Math.floor(Math.random() * shapes.length)];
}
// Evento cuando se acepta la propuesta
document.getElementById('acceptButton').addEventListener('click', () => {
    // Ocultar la propuesta
    proposal.style.display = 'none';

    // Cambiar fondo y mostrar mensaje dinámico
    document.body.classList.add('congrats');
    document.body.innerHTML = `
    <div class="text-acept">
        <h2>🎉 Ahora somos una pareja oficialmente mi amor 💖 🎉</h2>
        <p> En esta pagina subiremos todos los momentos que pasemos juntos, para que cuando nos extrañemos lo podamos ver al instante</p>
    </div>
    `;
    createFloatingShapes(); // Llamamos a la función para crear los corazones
});

// Evento cuando se declina la propuesta
document.getElementById('declineButton').addEventListener('click', () => {
    alert("Lo siento, seguiré intentándolo ❤️");
});
