import React from 'react'

const ConditionalRender = () => {
  const x = 3;

  const name = "João"
  return <div>
    {/*7 - Render Condicional  */}
    <h3>Isso será exibido?</h3>
    {x > 2 && <p>Se x for True, Sim</p>}
    {/* 8 - Else */}
    <h3>Render Ternário</h3>
    {name === "João" ? (
      <div>
        <p>Olá João!</p>
      </div>
    ) : (
      <div>
        <p>Nome não encontrado!</p>
      </div>
    )}

  </div>

};

export default ConditionalRender