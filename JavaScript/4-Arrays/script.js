// Arrays
const list = [1, 2, 3, 4, 5];
console.log(list);
console.log(typeof list);
// outro exemplo
const testeArrays = ["João", 5 > 2, 17, 1.8, [1, 1]];
console.log(testeArrays);

// Propriedades
const numbers = [1, 3, 4];
console.log(numbers.length);
console.log(numbers["length"]);

const myName = "João";
console.log(myName.length);
console.log(myName["length"]);

// Métodos
// concatenar
const otherNumbers = [1, 2, 3];

const allNumbers = numbers.concat(otherNumbers);
console.log(allNumbers);
// uppercase
const text = "algum texto";
console.log(text.toUpperCase());

console.log(typeof text.toUpperCase);
// encontrar a posição de um caracter
console.log(text.indexOf("g"));

// Objetos
const person = {
    name: "João",
    age: 31,
    job: "Programador",
};

console.log(person);

console.log(person.name);

console.log(person.name.length);

console.log(typeof person);

// Criando e Deletando Propriedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
};
console.log(car);

car.doors = 4;
console.log(car);

delete car.km;
console.log(car);

// Mais sobre Objetos
const obj = {
    a: "teste",
    b: true,
};
console.log(obj instanceof Object);

const obj2 = {
    c: [],
};

Object.assign(obj2, obj);
console.log(obj2);

// Conhecendo melhor os Objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// loop em Array
const users = ["João", "Matheus", "Pedro", "Miguel"]

for(let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`);
}

// push e pop

const array = ["a", "b", "c"];

array.push("d");
console.log(array);
console.log(array.length);
array.pop();
console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);
console.log(array);

array.push("z", "x", "y");

console.log(array);

// Shift e Unshift
const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letters);
console.log(letter);

letters.unshift("p", "q", "r");

letters.unshift("z");

console.log(letters);

// indexOf e lastIndexOf

const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"];

console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));

// valor = -1 para elementos não encontrados
console.log(myElements.indexOf("Xuxu"))


// slice
const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);

console.log(subArray);

console.log(testeSlice);
// Para exibir o valor indicado pelo indice. Ou ele pulará o ultimo
const subArray2 = testeSlice.slice(2, 4 + 1);

console.log(subArray2);
// No caso de um índice desconhecido
const subArray3 = testeSlice.slice(10, 20);

console.log(subArray3);

// apenas com o indice incial
const subArray4 = testeSlice.slice(2);

console.log(subArray4);


// forEach

const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
    console.log(`o número é ${numero}`);
});

// exemplo do dia a dia
const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category:"JavaScript"},
    {title: "Terceiro post", category:"Python"},
];

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title} da categoria: ${post.category}`);
})

// includes

const brands = ["BMW", "VW", "Fiat"];

console.log(brands.includes("Fiat"));

if (brands.includes("BMW")) {
    console.log("Há carros disponiveis de BMW");
}else {
    console.log("Em falta")
}


// reverse
const reverseTeste = [1, 2, 3, 4, 5];

reverseTeste.reverse();

console.log(reverseTeste);