const pressed = [];
const secretCode = "hejka";
const body = document.body;

window.addEventListener("keypress", (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("") === secretCode) {
    body.style.height = "100vh";
    body.style.textAlign = "center";
    body.style.lineHeight = "100vh";
    body.style.fontSize = "50px";
    body.style.fontWeight = "bolder";
    body.innerText = "Congrats!";
    setInterval(() => {
      body.style.color = `hsl(${(Math.random() * 360).toFixed()}, 100%, 50%)`;
      body.style.background = `hsl(${(
        Math.random() * 360
      ).toFixed()}, 100%, 50%`;
    }, 100);
  }
});
