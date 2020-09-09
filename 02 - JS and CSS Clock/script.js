// Time update function
let dateNow;
const updateDate = () => {
  dateNow = {
    date: new Date(),
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  };
  return dateNow;
};

// Clock update function

const handsArr = [...document.querySelectorAll(".hand")];
const hands = {
  hourHand: handsArr[0],
  minHand: handsArr[1],
  secondHand: handsArr[2],
};

handsArr.forEach((hand) => {
  hand.style.transformOrigin = "100% 50%";
  hand.style.transform = "rotate(90deg)";
  hand.style.borderRadius = "2px";
  hand.style.transition = "all 0.1s";
});
const updateHands = (dateNow) => {
  const { hours, minutes, seconds } = dateNow;
  const { hourHand, minHand, secondHand } = hands;

  secondHand.style.transform = `rotate(${seconds * (360 / 60) + 90}deg)`;
  minHand.style.transform = `rotate(${minutes * (360 / 60) + 90}deg)`;
  hourHand.style.transform = `rotate(${hours * (360 / 12) + 90}deg)`;
};

setInterval(() => {
  updateHands(updateDate());
}, 1000);
