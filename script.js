const prgs = document.getElementById("progress");
const song = document.getElementById("song");
const ctrlIcon = document.getElementById("ctrlIcon");
const songImg = document.getElementById("songImg");
const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");

const songs = [
  {
    title: "Cok Yazik",
    artist: "Luis Funis ft. Puret",
    src: "Çok yazık .m4a",
    img: "./images.jpg"
  },
  {
    title: "Ozledim",
    artist: "Murat Boz",
    src: "Murat Boz - Özledim (Official Video)(M4A_128K).m4a",
    img: "./istockphoto-1208843679-612x612.jpg"
  },
  {
    title: "Indian Song",
    artist: "Rema ft. Selena Gomez",
    src: "Indian song.m4a",
    img: "./download.jpg"
  }
];

let currentSong = 0;
function loadSong(index) {
  const s = songs[index];
  song.src = s.src;
  songImg.src = s.img;
  songTitle.textContent = s.title;
  songArtist.textContent = s.artist;
  prgs.value = 0;
  ctrlIcon.classList.remove("fa-pause");
  ctrlIcon.classList.add("fa-play");
}

function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
}

song.onloadedmetadata = function () {
  prgs.max = song.duration;
};

setInterval(() => {
  prgs.value = song.currentTime;
}, 500);

prgs.onchange = function () {
  song.currentTime = prgs.value;
};

document.getElementById("next").addEventListener("click", () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  song.play();
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
});

document.getElementById("prev").addEventListener("click", () => {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
  song.play();
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
});

song.addEventListener("ended", () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  song.play();
});

loadSong(currentSong);
