const imgUrl =
  "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/";
const filters = document.getElementById("filters");
const imgId = document.getElementById("main-img");
const reset = document.querySelector(".btn-reset");
const next = document.querySelector(".btn-next");
const save = document.querySelector(".btn-save");
const inputRange = document.querySelectorAll('input[type="range"]');
const inputFile = document.querySelector('input[type="file"]'); // download input
let blurValue = 0;
let isPressed = false;
let i = 1;

// Functions
// Change output value
const handleChangeOutput = (event) => {
  const input = event.target;
  if (input?.type === "range") {
    let output = document.getElementById(input.name);
    output.value = input.value;
  }
};

// Change filter value
const handleUpdateFilter = (event) => {
  if (event.target?.type === "range") {
    let dataSizing = event.target.dataset.sizing;
    if (event.target?.name === "blur") {
      blurValue = event.target.value;
    }
    imgId.style.setProperty(
      `--${event.target.name}`,
      event.target.value + dataSizing
    );
  }
};

// Reset filter value
const resetValues = () => {
  inputRange.forEach((element) => {
    let dataSizing = element.dataset.sizing;
    let defValue = element.defaultValue;
    imgId.style.setProperty(`--${element.name}`, defValue + dataSizing);
    let output = document.getElementById(element.name);
    output.value = defValue;
    element.value = defValue;
    blurValue = 0;
  });
};

// Full screen
const handleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.body.webkitRequestFullScreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
};

// Get src image from foreign source
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

// Change src image
const handleChangeImage = (src, image) => {
  next.disabled = true;
  setTimeout(function () {
    next.disabled = false;
  }, 500);
  image.onload = () => {
    imgId.setAttribute("src", src);
  };
};

// Get current time
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

// Download image
const handleDownloadImage = () => {
  const file = inputFile.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const image = new Image();
    image.src = reader.result;
    handleChangeImage(image.src, image);
    inputFile.value = null;
  };
  reader.readAsDataURL(file);
};

// Save image add apply canvas filter
const handleSaveImage = () => {
  const img = new Image();
  img.setAttribute("crossOrigin", "anonymous");
  img.src = imgId.src;

  img.onload = function () {
    let canvas = document.createElement("canvas");
    let context = canvas.getContext("2d");

    canvas.width = img.width;
    canvas.height = img.height;

    const filters = window.getComputedStyle(imgId).getPropertyValue("filter");
    const blurCoef =
      img.width > img.height
        ? img.width / imgId.clientWidth
        : img.height / imgId.clientHeight;
    const formattedFilters = filters.replace(
      /blur\(\w+\)/,
      `blur(${blurValue * blurCoef}px)`
    );
    context.filter = formattedFilters;

    context.drawImage(img, 0, 0, canvas.width, canvas.height);

    let imgLink = document.createElement("a");
    imgLink.id = "download";
    imgLink.href = canvas.toDataURL("image/jpeg");
    imgLink.download = "photo.jpg";

    document.body.appendChild(imgLink);
    imgLink.click();

    setTimeout(function () {
      imgLink.remove();
    }, 1000);
  };
};

// Add listeners
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

reset.addEventListener("click", () => {
  resetValues();
});

next.addEventListener("click", () => {
  handleGetImage();
});

inputFile.addEventListener("input", () => {
  handleDownloadImage();
});

save.addEventListener("click", () => {
  handleSaveImage();
});
