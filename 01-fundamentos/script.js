// arquivo script.js

console.log(document.getElementById('elementoOndeVoceEsta'))
console.log(document.getElementById('elementoOndeVoceEsta').parentNode)
const firstSonOfFirstSon = document.querySelector('#primeiroFilhoDoFilho').innerText ="Este é o primeiro filho do primeiro filho"
console.log(document.getElementById('pai').firstElementChild)
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling)
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling.nextSibling)
console.log(document.getElementById('pai').firstElementChild.nextElementSibling.nextElementSibling)


