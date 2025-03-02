document.addEventListener("DOMContentLoaded", function () {
  var audio = new Audio("./img/Guilty as Sin_.mp3");
  audio.loop = true; // Loop the song

  var playButton = document.getElementById("play-music-btn");
  
  if (playButton) {
    var playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        playButton.style.display = "block";
      });
    }

    playButton.addEventListener("click", function () {
      audio.play();
      playButton.style.display = "none";
    });
  }

  // Function to stop the music
  window.stopMusic = function() {
    audio.pause();
    audio.currentTime = 0;
  };
});
