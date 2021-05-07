const inputCheckbox = document.querySelector('input[type="checkbox"]');
const map = document.querySelector(".map-block-wrapper");
const logo = document.getElementById("logo");
const arrow = document.querySelectorAll(".arrow");
const logoLight = "../assets/logo-light.svg";
const arrowLight = "../assets/right-arrow-light.png";
const arrowDark = "../assets/right-arrow-light.svg";
const logoDark = "../assets/logo-dark.svg";
const maplight = "url('../assets/map-light.png')";
const mapDark = "url('../assets/map-dark.svg')";

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
    arrow.forEach((ar) => {
      ar.setAttribute("src", arrowLight);
    });
  } else {
    logo.setAttribute("src", logoDark);
    map.style.backgroundImage = mapDark;
    arrow.forEach((ar) => {
      ar.setAttribute("src", arrowDark);
    });
  }
};

inputCheckbox.addEventListener("change", (event) => {
  handleChangeColor(event);
  handleChangeImage(event);
});
