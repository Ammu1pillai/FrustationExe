const santa = document.getElementById('santa');
const obstacle = document.getElementById('obstacle');
const comment = document.getElementById('comment');
const timerDisplay = document.getElementById('timer');
const freezeScreen = document.getElementById('freeze-screen');

let jumpHeight = 220; // Height of the jump
let isJumping = false; // Track if Santa is currently jumping
let gameOver = false; // Track if the game is over
let attempts = 0; // Track the number of attempts
let seconds = 0; // Track elapsed time
let timerInterval; // Interval for the timer
let canJump = true; // Track if Santa can jump

// Sarcastic comments for game over
const sarcasticComments = [
  "Wow, that was... something. 😂",
  "You jump like a rock!",
  "Try again? Maybe use both legs this time?",
  "That obstacle wasn’t even moving, bro.",
  "Are you playing or just losing?"
];

// Start the timer
function startTimer() {
  timerInterval = setInterval(() => {
    seconds++;
    timerDisplay.textContent = formatTime(seconds);
  }, 1000);
}

// Format time as HH.MM.SS
function formatTime(totalSeconds) {
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const secs = String(totalSeconds % 60).padStart(2, '0');
  return `${hours}.${minutes}.${secs}`;
}

// Jump function
function jump() {
  if (!canJump || isJumping || gameOver) return; // Prevent jumps if cooldown is active or game is over
  canJump = false; // Disable jumping until cooldown is over
  isJumping = true;

  let startTime = Date.now();
  let jumpInterval = setInterval(() => {
    let elapsedTime = Date.now() - startTime;
    if (elapsedTime < 400) { // Smooth, slower jump
      santa.style.bottom = `${jumpHeight * Math.sin((elapsedTime / 400) * Math.PI)}px`;
    } else {
      clearInterval(jumpInterval);
      isJumping = false;
      santa.style.bottom = '0px'; // Reset to ground level

      // Add a random cooldown before the next jump
      const cooldown = Math.floor(Math.random() * (1000 - 500) + 500); // Random delay between 500ms and 1000ms
      setTimeout(() => {
        canJump = true; // Re-enable jumping after cooldown
      }, cooldown);
    }
  }, 15);
}

// Function to move the obstacle continuously
function moveObstacle() {
  if (gameOver) return;

  let obstaclePosition = -100; // Start off-screen
  obstacle.style.right = `${obstaclePosition}px`;

  const obstacleInterval = setInterval(() => {
    if (gameOver) {
      clearInterval(obstacleInterval);
      return;
    }

    obstaclePosition += 5; // Move the obstacle to the left
    obstacle.style.right = `${obstaclePosition}px`;

    // Reset obstacle position when it goes off-screen
    if (obstaclePosition > 800) {
      obstaclePosition = -100;
      obstacle.style.right = `${obstaclePosition}px`;
    }
  }, 20);
}

// Check collision between Santa and the obstacle
function checkCollision() {
  const santaRect = santa.getBoundingClientRect();
  const obstacleRect = obstacle.getBoundingClientRect();

  if (
    santaRect.left < obstacleRect.right &&
    santaRect.right > obstacleRect.left &&
    santaRect.bottom > obstacleRect.top
  ) {
    endGame(); // Trigger game over
  }
}

// End the game
function endGame() {
  gameOver = true;
  clearInterval(timerInterval); // Stop the timer
  attempts++;

  // Freeze everything
  santa.style.animation = 'none'; // Stop Santa's movement
  obstacle.style.animation = 'none'; // Stop obstacle's movement

  // Show sarcastic comment
  const randomComment = sarcasticComments[Math.floor(Math.random() * sarcasticComments.length)];
  comment.textContent = randomComment; // Display the comment
  comment.style.display = 'block'; // Make the comment visible

  let countdown = 3;
  freezeScreen.textContent = `Game Over! Restarting in ${countdown}...`;
  freezeScreen.style.display = 'flex'; // Show freeze screen

  // Countdown timer
  const countdownInterval = setInterval(() => {
    countdown--;
    if (countdown > 0) {
      freezeScreen.textContent = `Game Over! Restarting in ${countdown}...`;
    } else {
      clearInterval(countdownInterval);
    }
  }, 1000);

  // Redirect to window.html after 5 attempts
  if (attempts >= 5) {
    setTimeout(() => {
      window.location.href = "window.html";
    }, 3000);
  } else {
    setTimeout(() => {
      restartGame(); // Restart the game
    }, 3000);
  }
}

// Restart the game
function restartGame() {
  gameOver = false;
  seconds = 0;
  timerDisplay.textContent = formatTime(seconds);
  startTimer();
  comment.textContent = ""; // Clear the comment
  comment.style.display = 'none'; // Hide the comment
  freezeScreen.style.display = 'none'; // Hide freeze screen

  // Reset animations
  santa.style.animation = '';
  obstacle.style.animation = '';
  moveObstacle(); // Restart obstacle movement
}

// Listen for spacebar to jump
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space' && !gameOver) {
    jump();
  }
});

// Check for collisions every 20ms
setInterval(() => {
  if (!gameOver) {
    checkCollision();
  }
}, 20);

// Start the game
startTimer();
moveObstacle();