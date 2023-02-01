// arquivo script.js

// Buscando elementos
console.log(document.getElementById("elementoOndeVoceEsta"));
console.log(document.getElementById("elementoOndeVoceEsta").parentNode);
const firstSonOfFirstSon = (document.querySelector(
  "#primeiroFilhoDoFilho"
).innerText = "Este é o primeiro filho do primeiro filho");
console.log(document.getElementById("pai").firstElementChild);
console.log(document.getElementById("elementoOndeVoceEsta").nextSibling);
console.log(
  document.getElementById("elementoOndeVoceEsta").nextSibling.nextSibling
);
console.log(
  document.getElementById("pai").firstElementChild.nextElementSibling
    .nextElementSibling
);

// Adicionando elementos
const pai = document.getElementById("pai");
const irmaoDeElementoOndeVoceEsta = document.createElement("section");
irmaoDeElementoOndeVoceEsta.id = "irmaoDeElementoOndeVoceEsta";
pai.appendChild(irmaoDeElementoOndeVoceEsta);

const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
const filhoDeOndeVoceEsta = document.createElement("section");
filhoDeOndeVoceEsta.id = "filhoDeOndeVoceEsta";
elementoOndeVoceEsta.appendChild(filhoDeOndeVoceEsta);

const primeiroFilho = document.getElementById("primeiroFilho");
const primeiroFilhodoPrimeiroFilho = document.createElement("section");
primeiroFilhodoPrimeiroFilho.id = "primeiroFilhoDoPrimeiroFilho";
primeiroFilho.appendChild(primeiroFilhodoPrimeiroFilho);

console.log(
  document.getElementById("primeiroFilhoDoPrimeiroFilho").parentElement
    .nextElementSibling.nextElementSibling
);

// Removendo elementos
let headerDoElementoOndeVoceEsta = document.getElementById(
  "elementoOndeVoceEsta"
).firstElementChild;
console.log(headerDoElementoOndeVoceEsta);
elementoOndeVoceEsta.removeChild(headerDoElementoOndeVoceEsta);
