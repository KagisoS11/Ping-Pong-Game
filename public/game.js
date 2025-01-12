const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set canvas dimensions
canvas.width = 800;
canvas.height = 400;

// Game objects
const paddleWidth = 10;
const paddleHeight = 100;
const ballSize = 10;

// Player paddles
const player1 = { x: 10, y: canvas.height / 2 - paddleHeight / 2, score: 0 };
const player2 = { x: canvas.width - 20, y: canvas.height / 2 - paddleHeight / 2, score: 0 };

// Ball
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    dx: 4 * (Math.random() > 0.5 ? 1 : -1),
    dy: 4 * (Math.random() > 0.5 ? 1 : -1),
    size: ballSize,
};

// Controls
const keys = { ArrowUp: false, ArrowDown: false };

// Event listeners for player controls
window.addEventListener("keydown", (e) => keys[e.key] = true);
window.addEventListener("keyup", (e) => keys[e.key] = false);

// Draw functions
function drawRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function drawCircle(x, y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}

function drawText(text, x, y, color) {
    ctx.fillStyle = color;
    ctx.font = "20px Arial";
    ctx.fillText(text, x, y);
}

// Game loop
function update() {
    // Move player1 paddle
    if (keys.ArrowUp && player1.y > 0) player1.y -= 5;
    if (keys.ArrowDown && player1.y < canvas.height - paddleHeight) player1.y += 5;

    // Move player2 paddle (AI logic)
    if (ball.y > player2.y + paddleHeight / 2) {
        player2.y += 3; // AI paddle moves down
    } else if (ball.y < player2.y + paddleHeight / 2) {
        player2.y -= 3; // AI paddle moves up
    }

    // Prevent AI paddle from moving out of bounds
    player2.y = Math.max(0, Math.min(player2.y, canvas.height - paddleHeight));

    // Move ball
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Ball collision with top/bottom walls
    if (ball.y <= 0 || ball.y >= canvas.height - ball.size) {
        ball.dy *= -1;
    }

    // Ball collision with paddles
    if (
        ball.x <= player1.x + paddleWidth &&
        ball.y >= player1.y &&
        ball.y <= player1.y + paddleHeight
    ) {
        ball.dx *= -1;
    }
    if (
        ball.x + ball.size >= player2.x &&
        ball.y >= player2.y &&
        ball.y <= player2.y + paddleHeight
    ) {
        ball.dx *= -1;
    }

    // Scoring logic
    if (ball.x <= 0) {
        player2.score++;
        resetBall();
    }
    if (ball.x >= canvas.width) {
        player1.score++;
        resetBall();
    }
}

function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx *= -1;
}

// Render function
function render() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw paddles
    drawRect(player1.x, player1.y, paddleWidth, paddleHeight, "white");
    drawRect(player2.x, player2.y, paddleWidth, paddleHeight, "white");

    // Draw ball
    drawCircle(ball.x, ball.y, ball.size, "red");

    // Draw scores
    drawText(`Player 1: ${player1.score}`, 50, 20, "white");
    drawText(`Player 2: ${player2.score}`, canvas.width - 150, 20, "white");
}

// Game loop
function gameLoop() {
    update();
    render();
    requestAnimationFrame(gameLoop);
}

// Start the game
gameLoop();
