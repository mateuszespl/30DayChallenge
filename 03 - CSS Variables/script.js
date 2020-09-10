const root = document.documentElement;
const inputsArr = document.querySelectorAll("input");
const inputs = {
  spacingInput: inputsArr[0],
  blurInput: inputsArr[1],
  baseInput: inputsArr[2],
};
const { baseInput, blurInput, spacingInput } = inputs;

const updateVariable = (e) => {
  switch (e.target.name) {
    case "base":
      root.style.setProperty("--base", e.target.value);
      break;
    case "blur":
      root.style.setProperty("--blur", `${e.target.value}px`);
      break;
    case "spacing":
      root.style.setProperty("--top", `${e.target.value}px`);
      root.style.setProperty("--left", `${e.target.value}px`);
      break;
  }
};

inputsArr.forEach((input) => input.addEventListener("change", updateVariable));
