// Prompt / Alert
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

// else if

if(1 > 2) {
    console.log("teste");
} else if( 2 > 3) {
    console.log("teste2");
} else {
    console.log("agora sim");
}


// Repetições
let p = 0;

while(p < 10) {
    console.log(`o valor de p é ${p}`);
    p++;
}

// do while
let o = 10;

do {
    console.log(`Valor de o: ${o}`);
    o--;
} while (o > 1);


// for
for (let t = 0; t < 10; t++) {
    console.log("repetindo algo...")
}

let r = 10;

for (r; r > 0; r--) {
console.log(`repetindo...`)
}


// Break
for (let g = 20; g > 10; g--) {
    console.log(`O valor de g é: ${g}`);
    if(g === 12) {
        console.log("o g é 12!");
        break;
    }
}

for (let bre = 30; bre > 10; bre--) {
    console.log(`O valor de bre é:${bre}`);
    if(bre === 15) {
    console.log(`bre é: ${bre}`);
    break;
    }
}


for (let pula = 5; pula < 15; pula++) {
    if(pula % 2 === 0) {
        console.log(`Número par`);
        continue;
    }
    console.log(pula)
}


// switch
const job = prompt("Sua profissão:");

switch(job) {
    case "programador":
        alert("Você é Programador");
        break;
    case "advogado":
            alert("Você é advogado");
            break;
    case "pedreiro":
        alert("Voce é pedreiro");
        break;
// caso nao ache a resposta
    default:
        alert("Profissão não identificada");
}