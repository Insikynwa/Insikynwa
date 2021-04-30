const inputCheckbox = document.querySelector('input[type="checkbox"]');
const round = document.querySelector(".round");
const map = document.querySelector(".map-block-wrapper");
const logoLight = "assets/logo-light.svg";
const logoDark = "assets/logo-dark.svg";
const maplight = "url('assets/map-light.png')";
const mapDark = "url('assets/map-dark.svg')";
const logo = document.getElementById("logo");

console.log(inputCheckbox);

const handleChangeColor = (event) => {
  if (event.target.checked) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
};

const handlerChangeImage = () => {
  if (event.target.checked) {
  logo.setAttribute("src", logoLight);
  map.style.backgroundImage = maplight;
  }
  else {
    logo.setAttribute("src", logoDark);
    map.style.backgroundImage = mapDark;
  }

};

inputCheckbox.addEventListener("change", (event) => {
  handleChangeColor(event);
  handlerChangeImage(event);
});
