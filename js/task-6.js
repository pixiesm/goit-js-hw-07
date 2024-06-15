function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const formEl = document.querySelector(`#controls`)
const crtBtn = document.querySelector(`[data-create]`)
const dstryBTN = document.querySelector(`[data-destroy]`)
const inputElem = document.querySelector(`input`)
const divBoxElem = document.querySelector(`#boxes`)


crtBtn.addEventListener(`click`, onCreateButtonClick )

function onCreateButtonClick() {
  const amount = Number(inputElem.value);
  if (amount => 1 && amount <= 100) {
    createBoxes(amount);
    inputElem.value = '';
    
}
}
function createBoxes(amount) {
  divBoxElem.innerHTML = '';
  const arrBoxElem = [];
  for (let i = 1; i < amount; i++) {
    const newBoxElem = document.createElement(`div`);
    newBoxElem.style.width = `${30 + i * 10}px`;
    newBoxElem.style.height = `${30 + i * 10}px`;
    newBoxElem.style.backgroundColor = getRandomHexColor();
    arrBoxElem.push(newBoxElem);
  }
  divBoxElem.append(...arrBoxElem);
}

function destroyBoxes() { divBoxElem.innerHTML = '' };
dstryBTN.addEventListener('click', destroyBoxes);


