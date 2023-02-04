const body = document.getElementById("bodyProp");

const changeBackgroundColor = (event) => {
  body.style.backgroundColor = event.target.innerText;
};
const backgroundColor = document.querySelector("#background-color").children;
// console.log(backgroundColor);
for (let index of backgroundColor) {
  index.addEventListener("click", changeBackgroundColor);
}

const changeFontColor = (event) => {
    body.style.color = event.target.innerText;
}
const color = document.querySelector("#color").children;
for (let index of color) {
    index.addEventListener("click", changeFontColor);  }

  const changeFontSize = (event) => {
    body.style.fontSize = event.target.innerText;
}
const fontSize = document.querySelector("#font-size").children;
for (let index of fontSize) {
    index.addEventListener("click", changeFontSize);
  }

const changeLineHeight = (event) => {
    body.style.lineHeight = event.target.innerText;

}
const lineHeight = document.querySelector("#line-height").children;
for (let index of lineHeight) {
    index.addEventListener("click", changeLineHeight);
  }

  const changeFontFamily = (event) => {
    body.style.fontFamily = event.target.innerText;
}
const fontFamily = document.querySelector("#font-family").children;
for (let index of fontFamily) {
    index.addEventListener("click", changeFontFamily);
  }

