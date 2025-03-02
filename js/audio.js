document.addEventListener("DOMContentLoaded", function () {
  var audio = new Audio("./img/Guilty as Sin_.mp3");
  audio.loop = true; // Add this line to loop the song
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
