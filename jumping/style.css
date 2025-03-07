/* General body styling */
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #4B0082, #8A2BE2); /* Purple gradient background */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    position: relative;
}

/* Game container */
#game-container {
    position: relative;
    width: 800px;
    height: 400px;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
    border: 5px solid #FFD700; /* Golden border */
    border-radius: 20px; /* Rounded corners */
    overflow: hidden;
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.5); /* Golden glow effect */
}

/* Santa character */
#santa {
    position: absolute;
    bottom: 0;
    left: 100px;
    width: 80px;
    height: 80px;
    background-image: url('santa.png'); /* Path to Santa image */
    background-size: cover;
    transition: bottom 0.3s ease;
    filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.8)); /* Golden glow effect */
}

/* Obstacle */
#obstacle {
    position: absolute;
    bottom: 0;
    right: -100px; /* Start off-screen */
    width: 70px;
    height: 60px;
    background-image: url('gift.png'); /* Path to obstacle image */
    background-size: cover;
    animation: moveObstacle 4s linear infinite;
    filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.8)); /* Golden glow effect */
}

/* Obstacle animation */
@keyframes moveObstacle {
    0% {
        right: -100px;
    }
    100% {
        right: 800px;
    }
}

/* Comment display */
#comment {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
    color: #FFD700; /* Golden text */
    text-align: center;
    background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent black background */
    padding: 10px 20px;
    border-radius: 10px;
    display: none;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.5); /* Golden glow effect */
}

/* Timer display */
#timer {
    position: absolute;
    top: 80px; /* Adjust vertical position */
    left: 10%; /* Center horizontally */
    transform: translateX(-50%); /* Center horizontally */
    font-size: 24px;
    color: #FFD700; /* Golden text */
    background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent black background */
    padding: 5px 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.5); /* Golden glow effect */
    z-index: 3; /* Ensure timer is above tinsels */
}

/* Freeze screen (Game Over screen) */
.freeze-screen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    color: #FFD700; /* Golden text */
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1000;
    display: none;
    border-radius: 20px; /* Rounded corners */
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.5); /* Golden glow effect */
}

/* Show freeze screen when game is over */
#freeze-screen.show {
    display: flex;
}

/* Glowy stars (snowfall effect) */
@keyframes fall {
    0% {
        transform: translateY(-100px);
    }
    100% {
        transform: translateY(100vh);
    }
}

.star {
    position: absolute;
    width: 8px; /* Increased size for better visibility */
    height: 8px; /* Increased size for better visibility */
    background: #FFD700; /* Golden stars */
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.8); /* Enhanced glow */
    animation: fall linear infinite;
}

/* Add multiple stars with random positions and animation durations */
.star:nth-child(1) {
    left: 10%;
    animation-duration: 5s;
    animation-delay: 0s;
}

.star:nth-child(2) {
    left: 20%;
    animation-duration: 7s;
    animation-delay: 2s;
}

.star:nth-child(3) {
    left: 30%;
    animation-duration: 6s;
    animation-delay: 1s;
}

.star:nth-child(4) {
    left: 40%;
    animation-duration: 8s;
    animation-delay: 3s;
}

.star:nth-child(5) {
    left: 50%;
    animation-duration: 9s;
    animation-delay: 4s;
}

.star:nth-child(6) {
    left: 60%;
    animation-duration: 6s;
    animation-delay: 2s;
}

.star:nth-child(7) {
    left: 70%;
    animation-duration: 7s;
    animation-delay: 1s;
}

.star:nth-child(8) {
    left: 80%;
    animation-duration: 5s;
    animation-delay: 0s;
}

.star:nth-child(9) {
    left: 90%;
    animation-duration: 8s;
    animation-delay: 3s;
}

.star:nth-child(10) {
    left: 100%;
    animation-duration: 6s;
    animation-delay: 2s;
}

/* Tinsels on the sides */
.tinsel {
    position: absolute;
    top: 0;	
    width: 80px; /* Adjust size as needed */
    height: 80px;
    background-image: url('tinsel.png'); /* Path to tinsel image */
    background-size: contain;
    background-repeat: no-repeat; /* Repeat vertically */
    z-index: 2; /* Ensure tinsels are behind the game elements */
}

.tinsel.left {
    left: 0;
}

.tinsel.right {
    right: 0;
}