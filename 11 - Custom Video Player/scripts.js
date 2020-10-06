const video = document.querySelector("video");
const progress = document.querySelector(".progress").children[0];
const buttons = {
  play: [...document.querySelectorAll("button")][0],
  prev: [...document.querySelectorAll("button")][1],
  forward: [...document.querySelectorAll("button")][2],
};
const inputs = {
  volume: [...document.querySelectorAll("input")][0],
  playback: [...document.querySelectorAll("input")][1],
};

let isVideoPlaying = false;

const controlVideo = (e) => {
  if (e.target.title === "Toggle Play") {
    if (isVideoPlaying) {
      video.pause();
      isVideoPlaying = false;
      buttons.play.innerText = "►";
    } else {
      video.play();
      isVideoPlaying = true;
      buttons.play.innerText = "❚ ❚";
    }
  } else if (e.target.name === "volume") {
    video.volume = e.target.value;
  } else if (e.target.name === "playbackRate") {
    video.playbackRate = e.target.value;
  } else if (e.target.dataset.skip === "-10") {
    video.currentTime -= 10;
  } else if (e.target.dataset.skip === "25") {
    video.currentTime += 25;
  }
};

inputs.volume.addEventListener("change", controlVideo);
inputs.playback.addEventListener("change", controlVideo);
buttons.play.addEventListener("click", controlVideo);
buttons.forward.addEventListener("click", controlVideo);
buttons.prev.addEventListener("click", controlVideo);
video.addEventListener(
  "timeupdate",
  () =>
    (progress.style.flexBasis = `${
      (video.currentTime / video.duration) * 100
    }%`)
);
