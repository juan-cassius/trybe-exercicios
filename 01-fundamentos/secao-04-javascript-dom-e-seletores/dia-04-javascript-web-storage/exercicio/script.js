const main = document.querySelector("main").style;
//O Elemento body está agora em:
window.onload = () => {
  //Parte de iniciar:
  const init = () => {
    let backgroundC = JSON.parse(localStorage.getItem("backgroundColor"));
    if (backgroundC) main.backgroundColor = backgroundC;
    let colorF = JSON.parse(localStorage.getItem("color"));
    if (colorF) main.color = colorF;
    let fontSz = JSON.parse(localStorage.getItem("fontSize"));
    if (fontSz) main.fontSize = fontSz;
    let lineHe = JSON.parse(localStorage.getItem("lineHeight"));
    if (lineHe) main.lineHeight = lineHe;
    let fontFml = JSON.parse(localStorage.getItem("fontFamily"));
    if (fontFml) main.fontFamily = fontFml;
  };

  //Essa parte terá as funções:

  const changeBackgroundColor = (event) => {
    main.backgroundColor = event.target.innerText;
    localStorage.setItem(
      "backgroundColor",
      JSON.stringify(event.target.innerText)
    );
  };

  const changeFontColor = (event) => {
    main.color = event.target.innerText;
    localStorage.setItem("color", JSON.stringify(event.target.innerText));
  };

  const changeFontSize = (event) => {
    main.fontSize = event.target.innerText;
    localStorage.setItem("fontSize", JSON.stringify(event.target.innerText));
  };

  const changeLineHeight = (event) => {
    main.lineHeight = event.target.innerText;
    localStorage.setItem("lineHeight", JSON.stringify(event.target.innerText));
  };

  const changeFontFamily = (event) => {
    main.fontFamily = event.target.innerText;
    localStorage.setItem("fontFamily", JSON.stringify(event.target.innerText));
  };

  //Início e eventLsteners
  const color = document.querySelector("#color").children;
  for (let index of color) {
    index.addEventListener("click", changeFontColor);
  }
  const fontSize = document.querySelector("#font-size").children;
  for (let index of fontSize) {
    index.addEventListener("click", changeFontSize);
  }
  const lineHeight = document.querySelector("#line-height").children;
  for (let index of lineHeight) {
    index.addEventListener("click", changeLineHeight);
  }
  const fontFamily = document.querySelector("#font-family").children;
  for (let index of fontFamily) {
    index.addEventListener("click", changeFontFamily);
  }
  const backgroundColor = document.querySelector("#background-color").children;
  for (let index of backgroundColor) {
    index.addEventListener("click", changeBackgroundColor);
  }
  init();
};
