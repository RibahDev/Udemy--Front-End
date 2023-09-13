// Movendo-se pelo DOM
console.log(document.body);
console.log(document.body.childNodes[5]);
console.log(document.body.childNodes[5].childNodes);
console.log(document.body.childNodes[1].childNodes[1].textContent);

// Seleção por Tag
const listItens = document.getElementsByTagName("li");
console.log(listItens);

// Seleção por ID
const title= document.getElementById("title");
console.log(title);

// Seleção por Class
const product = document.getElementsByClassName("product");
console.log(product);

// Seleção por seletor Css
const productQuery = document.querySelectorAll(".product");
console.log(productQuery);

const mainContainer = document.querySelector("#main-container");
console.log(mainContainer);

// insertBefore
const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title);

// appendChild
const navLinks = document.querySelector("nav ul");
const li = document.createElement("li");
navLinks.appendChild(li);

// replaceChild
const h2 = document.createElement("h2");
h2.textContent = "Meu novo Título!";

header.replaceChild(h2, title);

// createTextNode

const myText = document.createTextNode("Agora vamos colocar mais um título");
console.log(myText);

const h3 = document.createElement("h3");

h3.appendChild(myText);

console.log(h3);

mainContainer.appendChild(h3);

// trabalhando com atributos
const fisrtLink = navLinks.querySelector("a");
console.log(fisrtLink);
fisrtLink.setAttribute("href", "https://www.google.com");
console.log(fisrtLink.getAttribute("href"));
fisrtLink.setAttribute("target", "_blank");

// trabalhando dimensões dos elementos
const footer = document.querySelector("footer");
console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

console.log(footer.clientWidth)
console.log(footer.clientHeight);

// posição do elemento
const product1 = product[0];
console.log(product1.getBoundingClientRect());

// Estilos com Js
mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBottom = "10px"

// HTMLCollection
for(const li of listItens) {
    li.style.backgroundColor = "red";
}