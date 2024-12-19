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

const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');

// Adapter le canvas à la taille de l'écran
function resizeCanvas() {
    canvas.width = document.body.offsetWidth;
    canvas.height = document.body.offsetHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Configuration Matrix
const cols = Math.floor(canvas.width / 20) + 1;
const ypos = Array(cols).fill(0);

function matrix() {
    // Fond noir avec légère transparence pour l'effet de traînée
    ctx.fillStyle = '#0001';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Texte vert
    ctx.fillStyle = '#0f0';
    ctx.font = '15pt monospace';

    // Dessiner les caractères Matrix
    ypos.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * 20;
        ctx.fillText(text, x, y);
        ypos[ind] = y > canvas.height + Math.random() * 10000 ? 0 : y + 20;
    });
}

// Lancer l'animation
setInterval(matrix, 50);
