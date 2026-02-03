document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById('no');
    
    // No button moves away when hovered
    noButton.addEventListener('mouseenter', function () {
        moveButton();
        generateEvilFaces();
    });

    function moveButton() {
        const maxX = window.innerWidth - noButton.offsetWidth - 20;
        const maxY = window.innerHeight - noButton.offsetHeight - 20;
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;
        noButton.style.position = 'fixed';
        noButton.style.left = newX + 'px';
        noButton.style.top = newY + 'px';
    }

    // Function to generate multiple evil face emojis
    function generateEvilFaces() {
        for (let i = 0; i < 5; i++) {
            let evilFace = document.createElement('div');
            evilFace.innerHTML = '😈';
            evilFace.classList.add('evil-face');
            document.body.appendChild(evilFace);
            
            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;
            
            evilFace.style.left = `${x}px`;
            evilFace.style.top = `${y}px`;
            
            // Remove the emoji after 1 second
            setTimeout(() => {
                evilFace.remove();
            }, 1000);
        }
    }
});
