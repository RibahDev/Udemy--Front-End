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

 