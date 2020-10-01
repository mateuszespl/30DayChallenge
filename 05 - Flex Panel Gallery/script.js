const panels = [...document.querySelectorAll(".panel")];
const openPanel = (e) => {
  const classes = e.target.className.split(" ");
  if (classes.includes("open")) {
    e.target.className = `${classes[0]} ${classes[1]}`;
  } else e.target.className += " open";
};
panels.forEach((panel) => panel.addEventListener("click", openPanel));
