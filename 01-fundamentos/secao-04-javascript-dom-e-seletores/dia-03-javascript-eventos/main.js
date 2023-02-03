const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");
const allLi = document.querySelectorAll("li");

// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre? --Notado, classe "tech"
// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado. --Feito
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso? --Assim, como feito abaixo
const turnTechClass = (event) => {
//   for (let index of allLi) {
//     index.classList.remove("tech");
//   }
document.querySelector(".tech").classList.remove('tech')
  event.target.className = "tech";
};

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?
const changeColorSpotrybefy = (event) =>{
    event.target.style.backgroundColor
}
// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:

const resetText = (event) => {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = "Opção reiniciada";
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
};
firstLi.addEventListener("dblclick", resetText);
for (let index of allLi) {
  index.addEventListener("click", turnTechClass);
}
input.addEventListener("change", changeTechTExt)
myWebpage.addEventListener("dblclick",changeColorSpotrybefy)
// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
