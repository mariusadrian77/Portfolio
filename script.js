const canvas = document.getElementById('lamp-effect');
const ctx = canvas.getContext('2d');

// Set canvas dimensions to cover the full viewport
function updateCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; // Ensure it covers the full viewport height
}

// Initial canvas size setup
updateCanvasSize();

let mouseX = 0;
let mouseY = 0;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Create a radial gradient with a larger radius and softer color stops
    const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 400); // Increase the radius to 400
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)'); // Softer, more subtle opacity at the center
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');   // Fully transparent at the edges

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});

window.addEventListener('scroll', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 400); // Keep the larger radius
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)'); // Softer opacity
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');   // Transparent edges

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});
