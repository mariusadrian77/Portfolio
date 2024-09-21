const canvas = document.getElementById('lamp-effect');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
function updateCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Function to create the lamp effect
function drawLampEffect() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 400);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Initial setup
updateCanvasSize();

let mouseX = 0, mouseY = 0;

// Event listener for mouse movement
window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    drawLampEffect(); // Draw lamp effect on mouse move
});

// Event listener for scroll
window.addEventListener('scroll', drawLampEffect);

// Handle window resizing
window.addEventListener('resize', updateCanvasSize);
