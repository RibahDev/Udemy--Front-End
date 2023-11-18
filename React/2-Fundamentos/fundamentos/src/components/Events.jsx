import React from 'react'

const Events = () => {

    const handleClick = (e) => {
        console.log(e);
        alert("Executou!");
    };

    // Função de Renderização
    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando Isso!</h1>
        }else {
            return <h2>Renderizando outra coisa</h2>
        }
    };

    return 10 > 2 && <p>Carregando...</p>
    
  return (
    <div>
        <div>
            <button onClick={() => alert("Testando um evento")}>
                Clique aqui
            </button>
        </div>
        {/* 7 - Evento com função */}
        <div>
            <button onClick={handleClick}>Clique Aqui - Com função</button>
        </div>
        {/* 8 - Função com render */}
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  );
};

export default Events