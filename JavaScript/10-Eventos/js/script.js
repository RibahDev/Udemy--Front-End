// Adicionando eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function() {
    console.log("clicou aqui!")
});

// Removendo Evento
const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
    console.log("Teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
    
    console.log("Evento removido");
    secondBtn.removeEventListener("click", imprimirMensagem);
})


// argumento do Evento
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX)
    console.log(event.pointerType)
    console.log(event.target)
})

// Propagação
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("Evento1");
});

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Evento2");
});

// Removendo evento padrão
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Não alterou a pagina!");
})

// eventos de tecla
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`);
});
document.addEventListener("keydown", (e) => {
    console.log(`Apertou a tecla ${e.key}`);
});

// Evento de mouse
const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", () => {
    console.log("Pressionou o botão");
});

mouseEvents.addEventListener("mouseup", () => {
    console.log("Soltou o botão");
});

mouseEvents.addEventListener("dblclick", () => {
    console.log("Clique duplo");
});

// Movimentos do mouse
document.addEventListener("mousemove", (e) => {
    console.log(`No eixo X:${e.x}`);
    console.log(`No eixo Y: ${e.y}`);
});

// Eventos de scroll
window.addEventListener("scroll", (e) => {
    if(window.pageYOffset > 200) {
    console.log("Passamos de 200px");
    }    
});

// Eventos de foco
const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
    console.log("Entrou no input")
});

input.addEventListener("blur", (e) => {
    console.log("Saiu do input")
});

// Eventos de carregamentos de Pagina
window.addEventListener("load", () => {
    console.log("A pagina carregou!");
});

window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "teste";
});

// Debounce
const debounce = (f, delay) => {
    let timeout;

    return (...arguments) => {
        if(timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            f.apply(arguments)
        }, delay);
    };
};

window.addEventListener(
    "mousemove",
    debounce(() => {
        console.log("Executando a cada 400ms");
    },400)
);


