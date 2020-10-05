const items = [...document.querySelectorAll(".item")];
const inputs = items.map((item) => item.children[0]);
let isShiftPressed = false;
let checkedItems = { first: undefined, last: undefined };

const checkInputs = (e, index) => {
  if (isShiftPressed) {
    checkedItems.last = index;
    if (checkedItems.first > checkedItems.last) {
      checkedItems = { first: checkedItems.last, last: checkedItems.first };
    }
    inputs
      .slice(checkedItems.first, checkedItems.last)
      .forEach((input) => (input.checked = true));
  } else {
    checkedItems.first = index;
  }
};

document.body.addEventListener("keydown", (e) =>
  e.key === "Shift" ? (isShiftPressed = true) : undefined
);
document.body.addEventListener("keyup", (e) =>
  e.key === "Shift" ? (isShiftPressed = false) : undefined
);

inputs.forEach((input, index) =>
  input.addEventListener("click", (e) => checkInputs(e, index))
);
