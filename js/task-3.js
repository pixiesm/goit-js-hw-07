const userNameEl = document.querySelector(`#name-input`);
const spanNameEl = document.querySelector(`#name-output`)
userNameEl.addEventListener(`input`, onUsernameInput);
function onUsernameInput(event) {
    event.preventDefault();
    const user = userNameEl.value.trim()
    
    if (user) { return spanNameEl.textContent = user; }
    else { spanNameEl.textContent = `Anonymous` }; 
}
