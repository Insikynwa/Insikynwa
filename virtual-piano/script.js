const piano = document.querySelector(".piano");
const main = document.querySelector(".main");
const pianoKeys = document.querySelectorAll(".piano-key");
const btnContainer = document.querySelector(".btn-container");
const btnActive = document.querySelectorAll(".btn");
let isPressed = false;

const playAudio = (note, event) => {
    const audio = new Audio();
    audio.src = `assets/audio/${note}.mp3`;
    audio.currentTime = 0;
    audio.play();
    if (event) {
        switchActive(event.target);
    } else {
        const noteElement = document.getElementById(note);
        switchActive(noteElement);
    }
};

const switchActive = (element) => {
    element.classList.toggle("piano-key-active");
};
piano.addEventListener("mousedown", (event) => {
    if (event.target.classList.contains("piano-key")) {
        const note = event.target.dataset.note;
        playAudio(note, event);

        isPressed = true;
    }
});

piano.addEventListener("mouseup", (event) => {
    if (event.target.classList.contains("piano-key-active")) {
        event.target.classList.remove("piano-key-active");
        isPressed = false;
    }
});
piano.addEventListener("mouseout", (event) => {
    if (event.target.classList.contains("piano-key-active")) {
        event.target.classList.remove("piano-key-active");
    }
});

const handleIsNotPressed = () => {
    isPressed = false;
};
piano.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("piano-key") && isPressed) {
        const note = event.target.dataset.note;
        playAudio(note, event);
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

window.addEventListener("keyup", () => {
    pianoKeys.forEach((element) =>
        element.classList.remove("piano-key-active")
    );
});

const handleFullScreen = () => {
    if (!document.fullscreenElement) {
        document.body.webkitRequestFullScreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
};
