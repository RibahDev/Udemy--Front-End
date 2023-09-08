// Métodos
const animal = {
    nome: "Bob",
    latir: function() {
        console.log("Au au");
    },
};

console.log(animal.nome);
animal.latir();

// Aprofundamentos em Métodos
const pessoa = {
    nome: "João",

    getNome: function() {
        return this.nome;
    },

    setNome: function(novoNome) {
        this.nome = novoNome;
    },
};

console.log(pessoa.nome);
console.log(pessoa.getNome());

pessoa.setNome("Ribah");
console.log(pessoa.getNome());

// Prototype
const text = "asd";

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const arr = [];

console.log(arr.length);
console.log(Object.getPrototypeOf(arr));

const myObject = {
    a: "b",
};

console.log(Object.getPrototypeOf(myObject));
console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);
console.log(mySecondObject)

// Classes básicas
const cachorro = {
    raca: null,
    patas: 4,
};

const pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao);
console.log(pastorAlemao.patas)

const bulldog = Object.create(cachorro);
bulldog.raca = "Bulldog";

console.log(bulldog);
console.log(bulldog.patas);

// Funções como classes
function criarCachorro(nome, raca) {
    const cachorro = Object.create({});

    cachorro.nome = nome;
    cachorro.raca = raca;
    return cachorro;
}

const bob = criarCachorro("Bob", "Vira lata");

console.log(bob);

const max = criarCachorro("Max", "Golden Retriever");

console.log(max);

console.log(Object.getPrototypeOf(max));

// Funções como classes
function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca = raca;
}

const rottweiler = new Cachorro("Daylla", "Rottweiler");
console.log(rottweiler)

// Métodos em funções construtoras
Cachorro.prototype.uivar = function () {
    console.log("Auuuuuu!");
};
console.log(Cachorro.prototype);
rottweiler.uivar();

// classes ES6
class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }
}

const logan = new CachorroClasse("Logan", "Pitbull");
console.log(logan);
console.log(Object.getPrototypeOf(logan));

// Mais sobre classes
class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    }
    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.eixos} e é da cor ${this.cor}`);
    }
}

const scania = new Caminhao(6, "Branco");
console.log(scania);

scania.descreverCaminhao();


const c2 = new Caminhao(4, "preta");
console.log(c2);
Caminhao.prototype.motor = 4.0;
const c3 = new Caminhao(8, "Azul");
console.log(c3.motor);

// override
class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const joao = new Humano("João", 23);

console.log(joao);
// Caso precisarmos validar algum dado, precisando dos dados da classe
Humano.prototype.idade = "Não definida";

console.log(joao.idade);

console.log(Humano.prototype.idade);

