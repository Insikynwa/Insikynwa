const piano = document.querySelector(".piano");
const pianoKeys = document.querySelectorAll(".piano-key");
const btnContainer = document.querySelector(".btn-container");
const btnActive = document.querySelectorAll(".btn");

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

btnContainer.addEventListener("click", (event) => {
    if (!event.target.classList.contains("btn-active")) {
        pianoKeys.forEach((element) =>
            element.classList.toggle("piano-key-letter")
        );
        btnActive.forEach((element) => element.classList.toggle("btn-active"));
    }
});


