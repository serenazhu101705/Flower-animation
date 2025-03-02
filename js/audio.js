let myAudio = new Audio("./img/I GUESS I'M IN LOVE.mp3"); // Create an Audio object with the new file

document.addEventListener('DOMContentLoaded', (event) => {
    setInterval(GameLoop, 1000 / 10); // Start the game loop when the DOM content is fully loaded
});

function GameLoop() {
    if (myAudio.paused) { // Check if the audio is paused
        myAudio.play(); // If paused, play the audio
    }
}
