const form = document.getElementById('guessForm');
const messageBox = document.getElementById('messageBox');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const guess = document.getElementById('guessInput').value.trim();
    if (guess.toLowerCase() === 'hugo') {
        showMessage('Félicitations ! Tu as trouvé ton secret Santa !', 'success');
        fireConfetti(); // Lancer les confettis
    } else {
        showMessage('Oups, mauvaise réponse. Essaie encore.', 'error');
    }
});
// Fonction pour afficher les messages
function showMessage(message, type) {
    messageBox.textContent = message;
    messageBox.className = ''; // Reset des classes
    messageBox.classList.add(type); // Ajouter la classe correspondante
    messageBox.style.display = 'block'; // Afficher le conteneur
}
// Fonction pour les confettis
function fireConfetti() {
    const duration = 2 * 1000; // 2 secondes
    const end = Date.now() + duration;
    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
        });
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

// script.js
const matrixContainer = document.querySelector('.matrix');

// Générer des caractères aléatoires pour l'effet Matrix
function generateMatrixCharacters() {
    const columns = Math.floor(window.innerWidth / 20);
    for (let i = 0; i < columns; i++) {
        const column = document.createElement('span');
        column.textContent = randomCharacter();
        column.style.left = `${i * 20}px`;
        column.style.animationDuration = `${Math.random() * 3 + 2}s`;
        column.style.animationDelay = `${Math.random() * 5}s`;
        matrixContainer.appendChild(column);
    }
}

// Générer un caractère aléatoire (lettres ou chiffres new)
function randomCharacter() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return chars.charAt(Math.floor(Math.random() * chars.length));
}

// Initialiser l'effet Matrix
generateMatrixCharacters();

