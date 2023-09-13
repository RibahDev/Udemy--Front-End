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