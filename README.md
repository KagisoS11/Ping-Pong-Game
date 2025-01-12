# Ping Pong Game Project

## Overview

This project is a **dynamic Ping Pong game** developed using **HTML5 Canvas, CSS, and JavaScript**, with a lightweight Node.js backend to serve the game files. The game offers a single-player experience where the user competes against an AI-controlled paddle. The AI paddle tracks the ball’s movement to provide a challenging gameplay experience. The game includes animations, scoring, and smooth gameplay, making it engaging and fun.

## Features

1. **Single-player Gameplay**: Player competes against an AI-controlled paddle.
2. **Smooth Animations**: The game runs at 60 frames per second (FPS) for seamless motion.
3. **Dynamic Ball Movement**: The ball bounces off walls and paddles with accurate collision detection.
4. **AI Paddle**: The opponent paddle intelligently moves to follow the ball's position.
5. **Scorekeeping**: Displays the score for both players during gameplay.
6. **Custom Styling**: Attractive game design using CSS for visual appeal.
7. **Cross-browser Compatibility**: Runs smoothly on all modern browsers.
8. **Responsive Design**: Adjusts to various screen sizes.

## Technologies Used

### Frontend:

- **HTML5 Canvas**: For rendering game elements.
- **CSS**: To style the game interface.
- **JavaScript**: For game logic and interactivity.

### Backend:

- **Node.js**: Serves the game files.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YourUsername/PingPongGame.git
   ```

2. Navigate to the project directory:

   ```bash
   cd PingPongGame
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   node server.js
   ```

5. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

## How to Play

1. Use the `ArrowUp` key to move the player's paddle up.
2. Use the `ArrowDown` key to move the player's paddle down.
3. The AI paddle (right side) automatically moves to follow the ball.
4. Prevent the ball from passing your paddle to avoid losing a point.
5. The first player to score 10 points wins the game.

## Game Mechanics

### Ball Movement

- The ball starts from the center and moves in a random direction.
- When the ball hits a wall, it bounces back.
- Collision with a paddle reverses the ball's horizontal direction and increases its speed slightly for added difficulty.

### AI Paddle

- The AI paddle follows the ball’s vertical position.
- It has a slightly slower movement speed than the ball, making it challenging but beatable.

### Scoring

- When the ball passes the player's paddle, the opponent scores a point.
- When the ball passes the AI paddle, the player scores a point.
- The score is displayed at the top of the game canvas.

## File Structure

```
PingPongGame/
|-- public/
|   |-- index.html       # Main HTML file
|   |-- style.css        # Styling for the game
|   |-- script.js        # Game logic
|
|-- server.js            # Node.js server
|-- package.json         # Node.js project file
```

## Future Enhancements

1. **Multiplayer Mode**: Add support for two-player gameplay.
2. **Mobile Compatibility**: Enable touch controls for mobile devices.
3. **Power-ups**: Include items that modify gameplay (e.g., ball speed boosts).
4. **Sound Effects**: Add audio feedback for collisions and scoring.
5. **Difficulty Levels**: Offer multiple difficulty settings for the AI paddle.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute this code as needed.

---

**Enjoy the game and have fun competing against the AI!**

