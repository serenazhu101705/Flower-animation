document.addEventListener("DOMContentLoaded", function () {
  // Create the audio object and set it to loop
  var audio = new Audio("./img/Guilty as Sin_.mp3");
  audio.loop = true;

  // Attempt to autoplay the audio on page load
  audio.play().catch((error) => {
    console.error("Autoplay failed:", error);
    // If autoplay is blocked, you can optionally show a play button.
    // Ensure you have an element with the id "play-music-btn" in your HTML.
    var playButton = document.getElementById("play-music-btn");
    if (playButton) {
      playButton.style.display = "block";
      playButton.addEventListener("click", function () {
        audio.play();
        playButton.style.display = "none";
      });
    }
  });

  // Define a global function to stop the music when needed
  window.stopMusic = function () {
    audio.pause();
    audio.currentTime = 0;
  };
});
