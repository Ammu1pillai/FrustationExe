const button = document.getElementById('runaway-btn');
const timesUpMessage = document.getElementById('times-up');
const countdownDisplay = document.getElementById('countdown');

let timeLeft = 30; // 30 seconds

// Function to move the button randomly
const moveButton = () => {
  const x = Math.floor(Math.random() * (window.innerWidth - 100));
  const y = Math.floor(Math.random() * (window.innerHeight - 100));
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
};

// Event listener to move the button when hovered
button.addEventListener('mouseover', moveButton);

// Function to update the countdown
const updateCountdown = () => {
  if (timeLeft > 0) {
    countdownDisplay.textContent = `You have ${timeLeft} seconds to live.`;
    timeLeft--;
  } else {
    clearInterval(countdownInterval); // Stop the countdown

    // Stop the button from moving
    button.removeEventListener('mouseover', moveButton);

    // Hide the button
    button.style.display = 'none';

    // Clear the countdown message
    countdownDisplay.textContent = '';

    // Show the "You are dead!" message
    timesUpMessage.classList.remove('hidden');
    timesUpMessage.classList.add('visible');

    // Redirect to window.html after 2 seconds
    setTimeout(() => {
      window.location.href = 'window.html';
    }, 2000); // 2 seconds delay before redirect
  }
};

// Start the countdown
const countdownInterval = setInterval(updateCountdown, 1000); // Update every second