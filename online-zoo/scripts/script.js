// Common
const inputRange = document.querySelectorAll('input[type="range"]');
let isPressed = false;

const handleChangeOutputValue = (input, value) => {
  let output = document.getElementById(input.id);
  input.value = value;
  output.value = "0" + value + "/";
};

const handleAddListener = (element) => {
  element.addEventListener("mousedown", (event) => {
    isPressed = true;
  });

  element.addEventListener("mouseup", (event) => {
    handleChangeOutputValue(event.target, event.target.value);
    isPressed = false;
  });
  element.addEventListener("mousemove", (event) => {
    if (isPressed) {
      handleChangeOutputValue(event.target, event.target.value);
    }
  });
};
inputRange.forEach((item) => {
  handleAddListener(item);
});

// Favourite animal slider

const carousel = document.querySelector(
  ".favourite-animal-slider-images-wrapper"
);
// let width = carousel.offsetWidth;
// window.addEventListener("resize", (e) => (width = carousel.offsetWidth));

//Pets in Zoo slider

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const petsInput = document.querySelector(".pets-slider");

let slideIndex = 0;
let carouselWidth = carousel.offsetWidth;

next.addEventListener("click", () => {
  slideIndex++;
  handleChangeOutputValue(petsInput, slideIndex + 1);
  if (slideIndex >= 8) {
    handleChangeOutputValue(petsInput, 1);
    slideIndex = 0;
  }
});

prev.addEventListener("click", () => {
  handleChangeOutputValue(petsInput, slideIndex);
  slideIndex--;
  if (slideIndex < 0) {
    handleChangeOutputValue(petsInput, 8);
    slideIndex = 7;
  }
});
