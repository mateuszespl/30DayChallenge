// Key elements array
const keys = [...document.querySelectorAll(".key")];
const kbds = keys.map((key) => key.children[0]);

// Mouse click / keyboard stroke handler
const handleClick = (e) => {
  if (
    e.type === "keypress" &&
    kbds.find((kbd) => kbd.innerHTML === e.key.toUpperCase())
  ) {
    const dataKey =
      e.type === "keypress"
        ? kbds.find((kbd) => kbd.innerHTML === e.key.toUpperCase())
            .parentElement.dataset.key
        : e.currentTarget.dataset.key;
    const key = document.querySelector(`div[data-key="${dataKey}"]`);
    const audio = document.querySelector(`audio[data-key="${dataKey}"]`);

    key.className = "key playing";
    audio.currentTime = 0;
    audio.play();
    setTimeout(() => (key.className = "key"), 100);
  } else return alert("Nie ma takiego przycisku.");
};

keys.forEach((key) => key.addEventListener("click", handleClick));
document.body.addEventListener("keypress", handleClick);
