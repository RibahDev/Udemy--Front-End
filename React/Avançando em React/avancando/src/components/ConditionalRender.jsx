import React from 'react'

const ConditionalRender = () => {
    const x = 3;
  
  return <div>
     {/*7 - Render Condicional  */}
     <h3>Isso será exibido?</h3>
     {x > 2 && <p>Se x for True, Sim</p>}
    </div>
  
};

export default ConditionalRender