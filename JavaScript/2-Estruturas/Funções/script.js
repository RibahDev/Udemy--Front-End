/*// Prompt / Alert
const age = prompt("Digite sua idade");
alert(`Sua idade: ${age}`);


// Math
// mostra o maior valor 
console.log(Math.max(5, 2, 1, 10));

// arredonda o valor para o menor "5"
console.log(Math.floor(5.14));

// arrendonda o valor para cima "6"
console.log(Math.ceil(5.14));

// Console
console.log("teste!")

// mensagem de erro 
console.error("erro!");

// Mensagem de aviso
console.warn("Aviso!")
*/

// if
const m = 10;

if(m > 5) {
    console.log("M é maior que 5!");
}

const user = "João"

if(user === "João") {
    console.log("Olá João");
}

// else
const loggedIn = false;
    if(loggedIn) {
        console.log("Está autenticado!");
    } else {
        console.log("Não está autenticado!");
    }
const q = 10;
const w = 25;

if(q > 5 && w > 20) {
    console.log("Números mais altos");
} else {
    console.log("Os números não são mais altos.");
}