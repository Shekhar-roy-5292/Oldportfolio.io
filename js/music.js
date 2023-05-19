// Sample track data
var tracks = [
  {
    name: "Imagination",
    albumPhoto: "images/track1-album-photo.jpg",
    audioFile: "mp3/track1.mp3"
  },
  {
    name: "Srotoshini",
    albumPhoto: "images/track2-album-photo.jpg",
    audioFile: "mp3/track2.mp3"
  },
  {
    name: "Bedona",
    albumPhoto: "images/track3-album-photo.jpg",
    audioFile: "mp3/track3.mp3"
  }
];
var audioPlayer = document.getElementById('audioPlayer');
var currentTrackIndex = 0;

// var audioPlayer = new Audio();

var albumImage = document.getElementById("album-image");
var trackName = document.getElementById("track-name");
var playButton = document.getElementById("play-btn");
var previousButton = document.getElementById("previous-btn");
var nextButton = document.getElementById("next-btn");

function loadTrack() {
  var currentTrack = tracks[currentTrackIndex];
  audioPlayer.src = currentTrack.audioFile;
  albumImage.src = currentTrack.albumPhoto;
  trackName.innerText = currentTrack.name;
}

function playTrack() {
  audioPlayer.play();
  playButton.innerText = "Pause";
}

function pauseTrack() {
  audioPlayer.pause();
  playButton.innerText = "Play";
}

function playNextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  loadTrack();
  playTrack();
}

function playPreviousTrack() {
  currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
  loadTrack();
  playTrack();
}

playButton.addEventListener("click", function() {
  if (playButton.innerText === "Play") {
    playTrack();
  } else {
    pauseTrack();
  }
});

nextButton.addEventListener("click", playNextTrack);
previousButton.addEventListener("click", playPreviousTrack);

// Load initial track
loadTrack();