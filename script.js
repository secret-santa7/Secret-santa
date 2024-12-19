const form = document.getElementById('guessForm');
const messageBox = document.getElementById('messageBox');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const guess = document.getElementById('guessInput').value.trim();
    if (guess.toLowerCase() === 'hugo') {
        showMessage('Félicitations ! Tu as trouvé mon prénom :tada:', 'success');
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
