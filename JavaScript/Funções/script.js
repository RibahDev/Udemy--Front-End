// Criando uma Função
function minhaFuncao() {
    console.log("Testando");
}

minhaFuncao();
minhaFuncao();

// Funções em variaveis
const minhaFuncaoEmVariavel = function () {
    console.log("Função em variavél");
};

minhaFuncaoEmVariavel();
minhaFuncaoEmVariavel();

// Parametro/Argumento
function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro("Alguma coisa");

funcaoComParametro("Outra função");

function notaEscola(nota) {
    console.log(`Sua nota é: ${nota}`);
}

notaEscola("Nota 10");

notaEscola("Nota 8");

//  return
const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
    return n1 + n2;
}

const resultado = soma(a, b);

console.log(resultado)

console.log(soma(c, d));
// Ex, compras
const banana = 4.99;
const maca = 6.99;
const mamao = 1.99;
const morango = 10;

function compras(n1, n2, n3) {
    return n1 + n2 +n3;
}

console.log(compras(banana, morango, mamao));
// Escopo
let y = 10;

function testandoEscopo() {
    let y = 20;
    console.log(`Y dentro da function é: ${y}`);
}

testandoEscopo();

console.log(`Y fora da function é: ${y}`);

// Escopo aninhamento
let m = 10

function escopoAninhamento() {
    let m = 20;

    if (true) {
        let m = 30;

        if (true) {
            let m = 40;

            console.log(m);
        }

        console.log(m);
    }

    console.log(m);
}

escopoAninhamento();

console.log(m); 

// arrow function
const testeArrow = () => {
    console.log("Esta é uma arrow function");
};
testeArrow();
// arrow par ou impar
const parOuImpar = (n) => {
    if(n % 2 === 0) {
        console.log("Par");
        return;
    }
console.log("Impar");
}

parOuImpar(10);
parOuImpar(11);

// Mais sobre arrow functions
const raizQuadrada = (x) => {
    return x * x;
};
console.log(raizQuadrada(4));

// abrevia ção
const raizQuadrada2 = (x) => x * x;
console.log(raizQuadrada2(5));
console.log(raizQuadrada2(12));


// Parametro opcional
const multiplication = function(m, n) {
    if (n === undefined) {
        return m * 2;
    } else {
        return m * n;
    }
};
console.log(multiplication(5));
console.log(multiplication(2, 4));

// exemplo parametro opcional
const greeting = (name) => {
    if(!name) {
        console.log("olá!");
        return
    }
    console.log(`Olá ${name}`);
}

greeting();
greeting("joao");

// valor default
 const customgreeting = (name, greet = "olá") => {
    return `${greet}, ${name}!`;
 };
 console.log(customgreeting("joao"));
 

 console.log(customgreeting("João", "Bom dia"));
//  Outro ex. default
const repeatText = (text, repeat = 2) => {
    for (let i = 0; i < repeat; i++) {
        console.log(text);
    }
};

repeatText("Testando");

repeatText("Testando 5 vezes", 5);

// próprio
const cadastroItem = (nameItem, ok = "Item Cadastrado") => {
    return `${nameItem} - ${ok}`;
};
console.log(cadastroItem("Furadeira"));
console.log(cadastroItem("Martelo"));

