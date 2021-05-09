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

//Pets in Zoo slider
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const petsInput = document.querySelector(".pets-slider");
const carousel = document.querySelector(".carousel");
const content = document.querySelector(".content");

let slideIndex = 0;
let carouselWidth = carousel.offsetWidth;

next.addEventListener("click", () => {
  slideIndex++;
  handleChangeOutputValue(petsInput, slideIndex + 1);
  if (slideIndex >= 8) {
    handleChangeOutputValue(petsInput, 1);
    slideIndex = 0;
  }
  carousel.scrollTo(carouselWidth * slideIndex, 0);
});

prev.addEventListener("click", () => {
  handleChangeOutputValue(petsInput, slideIndex);
  slideIndex--;
  if (slideIndex < 0) {
    handleChangeOutputValue(petsInput, 8);
    slideIndex = 7;
  }
  carousel.scrollTo(carouselWidth * slideIndex, 0);
});

petsInput.addEventListener("input", (event) => {
  carousel.scrollTo(carouselWidth * (event.target.value - 1), 0);
  slideIndex = event.target.value - 1;
});
