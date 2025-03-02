let myAudio = new Audio("./img/I GUESS I'M IN LOVE.mp3");

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('play-audio').addEventListener('click', () => {
        myAudio.play();
        // Optionally hide the button after playing
        document.getElementById('play-audio').style.display = 'none';
    });
});
