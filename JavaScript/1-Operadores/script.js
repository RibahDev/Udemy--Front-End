// Number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -2);

// Operações Aritméticas
console.log(2 + 4);
console.log(10 - 5);
console.log (5 * 4);
console.log(10 / 2);

console.log(5 + (8 * 2));

// Special numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log (2 * "asd");
console.log(typeof NaN);

// Strings
console.log("Hello World");
console.log(`Olá Mundo`);
console.log(typeof"Hello World");
console.log(typeof `Olá Mundo`);

// Simbolos especiais em string
console.log("Testando a \n quebra de linha");
console.log("Espaçamento \t de tab");

// Concatenalção
console.log("Oi," + "tudo" + " bem?")
console.log(`Testando` + ` Com` + ` Crase`)

// Template String
console.log(`A soma de 2 + 2 é: ${2 + 2}`);
console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

// Boolean
console.log(true);
console.log(5 > 20);
console.log(30 > 10);
console.log(typeof false);

// comparações
console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 10);
console.log(10 == 9);
console.log(10 != 9);

// Idêntico
console.log(9 == "9");
console.log(9 + "9");
console.log(9 === "9");
console.log(9 != "9");
console.log(9 !== "9");

// Operadores Lógicos
console.log(true && true);

console.log(true && false);

console.log(5 > 2 && 2 < 10);

console.log(5 > 2 && "joao" === 1);

console.log(5 > 2 || "joao" === 1);

console.log(5 < 2 || 5 > 1);
// not "!" inverte o resultado
console.log(!true);

console.log(!5 > 2);

// empty values
console.log(typeof null, typeof undefined);

console.log(null === undefined);

console.log(null == undefined);

console.log(null == false);

console.log(null == true);

console.log(undefined == false);

console.log(undefined == true);

//mudança de tipos
console.log(5 * null);

console.log("teste" * "teste");

console.log("10" + 1);

console.log("10" - 1);

