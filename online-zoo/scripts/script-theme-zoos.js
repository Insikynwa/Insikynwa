const inputCheckbox = document.querySelector('input[type="checkbox"]');
const logo = document.getElementById("logo");
const arrow = document.querySelectorAll(".arrow");
const logoLight = "../../assets/logo-light.svg";
const logoDark = "../../assets/logo-dark.svg";

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
  } else {
    logo.setAttribute("src", logoDark);
  }
};

inputCheckbox.addEventListener("change", (event) => {
  handleChangeColor(event);
  handleChangeImage(event);
});
