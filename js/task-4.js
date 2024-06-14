
const formEl = document.querySelector(`.login-form`);

formEl.addEventListener(`submit`, onFormSubmit);
function onFormSubmit(e) {
    e.preventDefault();
    const emailInput = formEl.elements[`email`];
    const passwordInput = formEl.elements[`password`];
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    if (emailValue === '' || passwordValue === '' ) { return alert('All form fields must be filled in') }
const newUser = {
    email : emailValue,
password : passwordValue};
console.log(newUser);
formEl.reset();
}

