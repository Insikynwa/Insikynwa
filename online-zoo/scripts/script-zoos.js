const mainVideo = document.querySelector(".zoo-video-player");
const videoPreviewPlug = document.querySelectorAll(".preview-plug");
const previewVideo = document.querySelectorAll(".preview-player");

videoPreviewPlug.forEach((element) =>
  element.addEventListener("click", () => {
    handleMove(element.id);
  })
);

const handleMove = (videoId) => {
  let mainVideoSrc = mainVideo.src;
  mainVideo.src = previewVideo[videoId - 1].src;
  previewVideo[videoId - 1].src = mainVideoSrc;
};
