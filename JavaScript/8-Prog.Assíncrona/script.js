// setTimeout
console.log("ainda não executou");

setTimeout(function() {
    console.log("requisição assíncrona");
}, 2000);

console.log("ainda não executou 2");

// setInterval
console.log("Ainda não começou");
/*
setInterval(function() {
    console.log("Intervalo assíncrono")
}, 3000);*/

// Promises
const promessa = Promise.resolve(5 + 5);
console.log("Algum código");

promessa.then(value => {
    console.log(`A soma é: ${value}`);
     return value;
})
 .then((value) => value - 1)
 .then((value) => console.log(`Agora é ${value}`));
console.log("Outro código");

// Falha na promise
Promise.resolve( 4 * "string")
.then((n) => {
    if (Number.isNaN(n)) {
        throw new Error("Valores inválidos!");
    }
})
.catch((err) => console.log(`Um erro ocorreu: ${err}`));

// Rejeitando Promises
function checkNumber(n) {
    return new Promise((resolve, reject) => {

        if(n > 10) {
            resolve(`O número é maior que 10`);
        } else {
            reject(new Error("Número muito baixo"));
        }
    });
}

const a = checkNumber(20);

const b = checkNumber(10);
a.then((v) => console.log(`o resultado é ${v}`)).catch((err) => 
    console.log(`um erro ocorreu! ${err}`)
);
b.then((v) => console.log(`o resultado é ${v}`)).catch((err) => 
    console.log(`um erro ocorreu! ${err}`)
);

// Resolvendo varias Promises
const p1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(10);
    }, 3000);
});

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
    if(30 > 10) {
        resolve(30);
    } else {
        reject("Erro!");
    }
});

Promise.all([p1, p2, p3]).then((value) => console.log(value));

// assync Functions
async function somarComDelay(a, b) {
    return a + b;
}

somarComDelay(2, 4).then((value) => {
    console.log(`O valor da soma é: ${value}`);
});

console.log("Teste async");

// -Instruções await
function resolveComDelay() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Resolveu a promise");
        }, 200);
    });
}

async function chamadaAsync() {
    console.log("Chamando a promise, e esperando o resultado")
    const result = await resolveComDelay()
    console.log(`O resultado chegou: ${result}`)
}

chamadaAsync();

// generators
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);