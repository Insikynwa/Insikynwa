const filters = document.getElementById("filters");
const imgId = document.getElementById("main-img");
const reset = document.querySelector(".btn-reset");
const inputSelectors = document.querySelectorAll("input");
let isPressed = false;

const handleChangeOutput = (event) => {
  const input = event.target;
  if (input?.type === "range") {
    let output = document.getElementById(input.name);
    output.value = input.value;
  }
};

// Апдейт значений фильтра
const handleUpdate = (event) => {
  if (event.target?.type === "range") {
    let dataSizing = event.target.dataset.sizing;
    imgId.style.setProperty(
      `--${event.target.name}`,
      event.target.value + dataSizing
    );
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

reset.addEventListener("click", () => {
  resetValues();
});
const resetValues = () => {
  inputSelectors.forEach((element) => {
    if (element.type === "range") {
      let dataSizing = element.dataset.sizing;
      let defValue = element.defaultValue;
      imgId.style.setProperty(`--${element.name}`, defValue + dataSizing);
      let output = document.getElementById(element.name);
      output.value = defValue;
      element.value = defValue;
    }
  });
};

const handleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.body.webkitRequestFullScreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
};
