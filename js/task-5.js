function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const textColor = document.querySelector('.color')
const clickBtn = document.querySelector(`.change-color`);
clickBtn.addEventListener(`click`, onButtonClick);
function onButtonClick() {
  const newColorElem = getRandomHexColor();
  document.body.style.backgroundColor = newColorElem;
  textColor.textContent = newColorElem;

}
 

  


