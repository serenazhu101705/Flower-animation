document.addEventListener("DOMContentLoaded", function () {
  var audio = new Audio("./img/I GUESS I'M IN LOVE.mp3");
  var playButton = document.getElementById("play-music-btn");

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
});
