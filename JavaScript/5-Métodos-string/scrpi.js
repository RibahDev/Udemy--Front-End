// trim

const trimTeste = "   testando \n";

console.log(trimTeste);

console.log(trimTeste.trim());

console.log(trimTeste.length);
console.log(trimTeste.trim().length);

// padStart
const padStartTest = "1";

const newNumber = padStartTest.padStart(4, "0");

console.log(padStartTest);
console.log(newNumber);

const newNumber2 = newNumber.padEnd(10, "0");

console.log(newNumber2);

// split
const frase = "O rato roeu a roupa do rei de Roma";

const arrayDaFrase = frase.split(" ");
console.log(arrayDaFrase);

// join
const fraseDenovo = arrayDaFrase.join(" ");

console.log(fraseDenovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"]

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`;

console.log(fraseDeCompra);

// Repeat
const palavra = "Testando ";

console.log(palavra.repeat(5));

// Rest Operator
const somaInfinita = (...args) => {
    let total = 0;
    for(i = 0; i < args.length; i++) {
        total +=args[i];
    }
    return total;
};
console.log(somaInfinita(3, 3, 3));
console.log(somaInfinita(17, 546, 5634, 31, 35890));

// for...of
const somaInfinita2 = (...args) => {
    let total= 0
        for (num of args) { 
            total += num;
        }
        return total;
}

console.log(somaInfinita2(2, 2, 5, 7, 8));

// Destructuring em objetos
const userDetails = {
    firstName: "João",
    lastName: "Ribeiro",
    job: "Programador",
};

const { firstName, lastName, job} = userDetails;
console.log(firstName, lastName, job);

// renomear variaveis
const { firstName: primeiroNome} = userDetails;
console.log(firstName)
console.log(primeiroNome);

// Destructuring em arrays
const myList = ["Avião", "Submarino", "Carro"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

// Json arrays
const myJson = '{"name": "João", "age": 31, "skills": ["PHP", "JavaScript", "Python"]}';
console.log(myJson);

console.log(typeof myJson);

// Json objetos
const myObject = JSON.parse(myJson);

console.log(myObject);
console.log(myObject.name);

// Adicionando uma string

myObject.isOpenToWork = true;

console.log(myObject);
// Convertendo para json novamente (p/ apis)
const myNewJson = JSON.stringify(myObject);

console.log(myNewJson);
console.log(typeof myNewJson);