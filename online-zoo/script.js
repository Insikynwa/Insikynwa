const inputCheckbox = document.querySelector('input[type="checkbox"]');
const round = document.querySelector(".round");
const map = document.querySelector(".map-block-wrapper");
const logoLight = "assets/logo-light.svg";
const logoDark = "assets/logo-dark.svg";
const maplight = "url('assets/map-light.png')";
const mapDark = "url('assets/map-dark.svg')";
const logo = document.getElementById("logo");
const inputRange = document.querySelectorAll('input[type="range"]');
let isPressed = false;

const handleChangeColor = (event) => {
  if (event.target.checked) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
};

const handleChangeImage = (event) => {
  if (event.target.checked) {
    logo.setAttribute("src", logoLight);
    map.style.backgroundImage = maplight;
  } else {
    logo.setAttribute("src", logoDark);
    map.style.backgroundImage = mapDark;
  }
};

const handleChangeOutputValue = (input) => {
  let output = document.getElementById(input.id);
  output.value = "0" + input.value + "/";
};

inputCheckbox.addEventListener("change", (event) => {
  handleChangeColor(event);
  handlerChangeImage(event);
});

const handleAddListener = (element) => {
  element.addEventListener("mousedown", (event) => {
    isPressed = true;
  });

  element.addEventListener("mouseup", (event) => {
    handleChangeOutputValue(event.target);
    isPressed = false;
  });
  element.addEventListener("mousemove", (event) => {
    if (isPressed) {
      handleChangeOutputValue(event.target);
    }
  });
};
inputRange.forEach((item) => {
  handleAddListener(item);
});

