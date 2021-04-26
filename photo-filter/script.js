const imgUrl =
  "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/";
const filters = document.getElementById("filters");
const imgId = document.getElementById("main-img");
const reset = document.querySelector(".btn-reset");
const next = document.querySelector(".btn-next");
const inputRange = document.querySelectorAll('input[type="range"]');
const inputFile = document.querySelector('input[type="file"]');
let isPressed = false;
let i = 1;

filters.addEventListener("mousedown", () => {
  isPressed = true;
});
filters.addEventListener("mouseup", (event) => {
  handleChangeOutput(event);
  handleUpdateFilter(event);
  isPressed = false;
});

filters.addEventListener("mousemove", (event) => {
  if (isPressed) {
    handleChangeOutput(event);
    handleUpdateFilter(event);
  }
});

const handleChangeOutput = (event) => {
  const input = event.target;
  if (input?.type === "range") {
    let output = document.getElementById(input.name);
    output.value = input.value;
  }
};

// Апдейт значений фильтра
const handleUpdateFilter = (event) => {
  if (event.target?.type === "range") {
    let dataSizing = event.target.dataset.sizing;
    imgId.style.setProperty(
      `--${event.target.name}`,
      event.target.value + dataSizing
    );
  }
};

reset.addEventListener("click", () => {
  resetValues();
});
const resetValues = () => {
  inputRange.forEach((element) => {
    let dataSizing = element.dataset.sizing;
    let defValue = element.defaultValue;
    imgId.style.setProperty(`--${element.name}`, defValue + dataSizing);
    let output = document.getElementById(element.name);
    output.value = defValue;
    element.value = defValue;
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

next.addEventListener("click", () => {
  handleGetImage();
});

const handleGetImage = () => {
  const image = new Image();
  let num = 0;

  if (i < 10) {
    num = "0" + i;
  } else if (i > 20) {
    i = 1;
    num = "0" + i;
  } else {
    num = i;
  }
  i++;
  let timeOfDay = handleGetHours();
  image.src = imgUrl + timeOfDay + `/${num}.jpg`;
  handleChangeImage(image.src, image);
};

const handleChangeImage = (src, image) => {
  next.disabled = true;
  setTimeout(function () {
    next.disabled = false;
  }, 500);
  image.onload = () => {
    imgId.setAttribute("src", src);
  };
};

const handleGetHours = () => {
  let hours = new Date().getHours();
  if (hours >= 06 && hours < 12) {
    return "morning";
  } else if (hours >= 12 && hours < 18) {
    return "day";
  } else if (hours >= 18 && hours < 24) {
    return "evening";
  } else return "night";
};

inputFile.addEventListener("input", () => {
  const file = inputFile.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const image = new Image();
    image.src = reader.result;
    handleChangeImage(image.src, image);
    inputFile.value = null; // why?
  };
  reader.readAsDataURL(file);
});
