// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

const aPrevent = (event) => {
event.preventDefault();
}
const checkPrevent = (event) => {
    event.preventDefault();
}
const textPrevent = (event) => {
    event.preventDefault();
}
HREF_LINK.addEventListener('click', aPrevent) 
INPUT_CHECKBOX.addEventListener('click', checkPrevent)
INPUT_TEXT.addEventListener('keypress', textPrevent)