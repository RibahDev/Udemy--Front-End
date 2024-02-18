import { useState} from 'react'

const Data = () => {
  let someData = 10;

  const [anotherNumber, setAnotherNumber] = useState(15);

  const [zeroNumber, setZeroNumber] = useState(null);

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => someData = 15}>Mudar variável</button>
      </div>
      <div>
        <p>Valor: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(20)}>Mudar state</button>
        <button onClick={() => setAnotherNumber(15)}>Retorna state</button>
        <p>Menor Valor: {zeroNumber}</p>
        <button onClick={() => setZeroNumber(0)}>Exibir Valor</button>
        <button onClick={() => setZeroNumber(null)}>Limpar</button>
      </div>
    </div>
  );
};

export default Data;