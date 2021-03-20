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

btnContainer.addEventListener("click", () => {
    pianoKeys.forEach((element) =>
        element.classList.toggle("piano-key-letter")
    );
    btnActive.forEach((element) => element.classList.toggle("btn-active"));
});

window.addEventListener("keydown", (event) => {
    switch (event.code) {
        case "KeyD":
            playAudio("c");
            break;
        case "KeyF":
            playAudio("d");
            break;
        case "KeyG":
            playAudio("e");
            break;
        case "KeyH":
            playAudio("f");
            break;
        case "KeyJ":
            playAudio("g");
            break;
        case "KeyK":
            playAudio("a");
            break;
        case "KeyL":
            playAudio("b");
            break;
        case "KeyR":
            playAudio("c♯");
            break;
        case "KeyT":
            playAudio("d♯");
            break;
        case "KeyU":
            playAudio("f♯");
            break;
        case "KeyI":
            playAudio("g♯");
            break;
        case "KeyO":
            playAudio("a♯");
            break;
    }
});

 
// const startFullScreen = document.querySelector(".openfullscreen");
//    startFullScreen.addEventListener("mousedown", () => {
//     if (document.documentElement.requestFullscreen) {
//         document.documentElement.requestFullScreen();
//     }
//     if (document.exitFullscreen) {
//         document.exitFullscreen();
//     }
// }); 
