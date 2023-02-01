const header1 = document.createElement("h1");
header1.innerText = "TrybeTrip - Agência de Viagens";

const body = document.querySelector("body");
body.appendChild(header1);

const main = document.createElement("main");
main.className = "main-content";
body.appendChild(main);

const section1 = document.createElement("section");
section1.className = "center-content";
main.appendChild(section1);

const p1 = document.createElement("p");
p1.innerText = "Este é um parágrafo Lorem Ipsum";
section1.appendChild(p1);

const section2 = document.createElement("section");
section2.className = "left-content";
main.appendChild(section2);

const section3 = document.createElement("section");
section3.className = "right-content";
main.appendChild(section3);

const img = document.createElement("img");
img.src = "https://picsum.photos/200";
img.className = "small-image";
section2.appendChild(img);

const createL1 = (text) =>{
    const li1 = document.createElement("li");
    li1.innerText = text;
    return li1
}

const ul1 = document.createElement("ul");
section3.appendChild(ul1)

const li1 = createL1('um');
const li2 =createL1('dois')
const li3 =createL1('três')
const li4 =createL1('quatro')
const li5 =createL1('cinco')
const li6 =createL1('seis')
const li7 =createL1('sete')
const li8 =createL1('oito')
const li9 =createL1('nove')
const li10 =createL1('dez')

ul1.appendChild(li1)
ul1.appendChild(li2)
ul1.appendChild(li3)
ul1.appendChild(li4)
ul1.appendChild(li5)
ul1.appendChild(li6)
ul1.appendChild(li7)
ul1.appendChild(li8)
ul1.appendChild(li9)
ul1.appendChild(li10)

const h3one = document.createElement('h3');
main.appendChild(h3one)
const h3two = document.createElement('h3');
main.appendChild(h3two)
const h3three = document.createElement('h3');
main.appendChild(h3three)

header1.id = 'title'
h3one.className = 'description'
h3two.className = 'description'
h3three.className = 'description'

main.removeChild(section2)

section3.className = 'left-content'
section3.style.marginLeft = 'auto';
section1.parentNode.style.backgroundColor = 'green';
ul1.lastElementChild.remove();
ul1.lastElementChild.remove();