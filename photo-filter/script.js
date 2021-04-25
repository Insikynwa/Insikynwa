const filters = document.getElementById("filters");
const imgId = document.getElementById("main-img");
let isPressed = false;

const handleChangeOutput = (event) => {
  const input = event.target;
  if (input?.type === "range") {
    let output = document.getElementById(input.name);
    output.value = input.value;
  }
};

const handleUpdate = (event) => {
  if (event.target?.type === "range") {
    let dataSizing = event.target.dataset.sizing;
    imgId.style.setProperty(
      `--${event.target.name}`,
      event.target.value + dataSizing
    );
    // console.log(imgId)
  }
};

filters.addEventListener("mousedown", () => {
  isPressed = true;
});
filters.addEventListener("mouseup", (event) => {
  handleChangeOutput(event);
  handleUpdate(event);

  isPressed = false;
});

filters.addEventListener("mousemove", (event) => {
  if (isPressed) {
    handleChangeOutput(event);
    handleUpdate(event);
  }
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
