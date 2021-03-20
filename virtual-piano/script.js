const piano = document.querySelector(".piano");
const pianoKeys = document.querySelectorAll(".piano-key");

const playAudio = (element) => {
    const audio = new Audio();
    audio.src = `assets/audio/${element}.mp3`;
    audio.currentTime = 0;
    audio.play();
};

piano.addEventListener("mousedown", (event) => {
    if (event.target.classList.contains("piano-key")) {
        const note = event.target.dataset.note;
        playAudio(note);
        event.target.classList.toggle("piano-key-active");
    }
});

piano.addEventListener("mouseup", (event) => {
    if (event.target.classList.contains("piano-key")) {
        event.target.classList.toggle("piano-key-active");
    }
});

